"use server";

import { genSaltSync, hashSync } from "bcrypt-ts";
import prisma from "./db";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { getSession } from "./getSession";
import { revalidatePath } from "next/cache";
import { CreateEmailOptions, CreateEmailRequestOptions } from "resend";
import { Resend } from "resend";
import { EmailTemplate } from "@/app/components/email-template/WelcomeEmailTemplate";
import crypto from "crypto";
import fs from "node:fs/promises";
import { ResetPasswordEmailTemplate } from "@/app/components/email-template/ResetPasswordEmail";
import { createClient } from "@supabase/supabase-js";
import { DateTime } from "next-auth/providers/kakao";

const resend = new Resend(process.env.RESEND_API_KEY);

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL; // Your Supabase URL
const supabaseKey = process.env.SUPABASE_ANON_KEY; // Your Supabase Anon Key
const supabase = createClient(supabaseUrl as string, supabaseKey as string);

// Logs in a user
export const login = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await signIn("credentials", {
      redirect: false,
      callbackUrl: "/dashboard",
      email,
      password,
    });
  } catch (error) {
    throw new Error("Invalid Credentials");
  }
  redirect("/dashboard");
};

// Resets user password
export const resetPassword = async (email: string) => {
  console.log("Resetting password for " + email);

  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const resetPasswordToken = crypto.randomBytes(32).toString("base64url");
  const today = new Date();
  const expiryDate = new Date(today.setDate(today.getDate() + 1)); //Token expires after 2 hours

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      resetPasswordToken: resetPasswordToken,
      resetPasswordTokenExpiry: expiryDate,
    },
  });

  await sendEmail({
    from: "LJE Nigeria <admin@ljenigeria.com>",
    to: [email],
    subject: "Reset Password",
    react: ResetPasswordEmailTemplate({
      email,
      resetPasswordToken,
    }) as React.ReactElement,
  });

  return "Password reset email sent";
};

//Changes User Password on reset
export const changePasswordOnReset = async (
  resetPasswordToken: string,
  password: string
) => {
  const user = await prisma.user.findUnique({
    where: { resetPasswordToken },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const resetPasswordTokenExpiry = user.resetPasswordTokenExpiry;
  if (!resetPasswordTokenExpiry) {
    throw new Error("Token expired");
  }
  const today = new Date();

  if (today > resetPasswordTokenExpiry) {
    throw new Error("Token expired");
  }

  const salt = genSaltSync(10);
  const hashedPassword = hashSync(password, salt);

  await prisma.user.update({
    where: { id: user.id },
    data: {
      password: hashedPassword,
      resetPasswordToken: null,
      resetPasswordTokenExpiry: null,
    },
  });

  return "Password changed succesfully";
};

// Create mail with options provided
export const sendEmail = async (
  payload: CreateEmailOptions,
  options?: CreateEmailRequestOptions | undefined
) => {
  const data = await resend.emails.send(payload, options);

  console.log("Email sent successfully");

  return data;
};

// Creates a new user and sends a welcome mail
export const createUser = async (formData: FormData) => {
  if (
    !formData.get("email") ||
    !formData.get("password") ||
    !formData.get("confirmpassword") ||
    !formData.get("state") ||
    !formData.get("gender") ||
    !formData.get("firstname") ||
    !formData.get("dob") ||
    !formData.get("phone") ||
    !formData.get("maritalstatus") ||
    !formData.get("education") ||
    !formData.get("occupation")
  ) {
    throw new Error("Please fill the form details correctly");
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(formData.get("email") as string)) {
    throw new Error("Invalid email");
  }

  if (
    (formData.get("password") as string) !=
    (formData.get("confirmpassword") as string)
  ) {
    throw new Error("Passwords do not match");
  }

  const salt = genSaltSync(10);
  const hashedPassword = hashSync(formData.get("password") as string, salt);
  const existingUserEmail = await prisma.user.findUnique({
    where: { email: formData.get("email") as string },
  });

  const displayPhoto = () => {
    if ((formData.get("gender") as string) === "Female") {
      const displayImage = "/casual-female-avatar.png";
      return displayImage;
    } else {
      const displayImage = "/casual-male-avatar.png";
      return displayImage;
    }
  };

  console.log(formData.get("dob"));

  if (existingUserEmail) {
    throw new Error("User already exists");
  }

  const userRole = () => {
    if ((formData.get("email") as string) === "admin@ljenigeria.org") {
      return "ADMIN";
    } else {
      return "USER";
    }
  };

  await prisma.user.create({
    data: {
      email: formData.get("email") as string,
      password: hashedPassword,
      firstName: formData.get("firstname") as string,
      lastName: formData.get("lastname") as string,
      userName: formData.get("username") as string,
      state: formData.get("state") as string,
      civilStatus: formData.get("maritalstatus") as string,
      gender: formData.get("gender") as string,
      Address: formData.get("address") as string,
      phoneNumber: formData.get("phone") as string,
      education: formData.get("education") as string,
      occupation: formData.get("occupation") as string,
      dateOfBirth: formData.get("dob") as string | null | undefined,
      image: displayPhoto(),
      role: userRole(),
    },
  });
  // Sends a mail to new user
  await sendEmail({
    from: "LJE Nigeria <admin@ljenigeria.com>",
    to: [formData.get("email") as string],
    subject: "Welcome to LJE Nigeria",
    react: EmailTemplate({
      userName: formData.get("username") as string,
    }) as React.ReactElement,
  });
  redirect("/login?signupsucess=true");
};

// Creates a new announcement (Admin Privilages)
export const createAnnouncement = async (formData: FormData) => {
  const announcementTitle = await prisma.announcement.findFirst({
    where: { permalink: formData.get("permalink") as string },
  });

  const file = formData.get("file") as File;

  if (!file) {
    throw new Error("No file detected");
  }

  if (announcementTitle) {
    throw new Error("This post probably already exists");
  } else {
    const { data: image, error: uploadError } = await supabase.storage
      .from("ljefiles")
      .upload(`${file.name}`, file);
    if (uploadError) {
      throw uploadError;
    }

    const { data: imgUrl } = await supabase.storage
      .from("ljefiles")
      .getPublicUrl(`${file.name}`);
    if (imgUrl) {
      await prisma.announcement.create({
        data: {
          category: formData.get("category") as string,
          author: formData.get("author") as string,
          permalink: formData.get("permalink") as string,
          title: formData.get("title") as string,
          membersOnly: formData.get("membersonly") as string,
          content: formData.get("content") as string,
          displayImage: imgUrl.publicUrl,
        },
      });
    }

    redirect("/admin?announcementsuccess=true");
  }
};

// Creates a new state rep (Admin Privilages)
export const createStateRep = async (formData: FormData) => {
  if (
    !formData.get("email") ||
    !formData.get("fullname") ||
    !formData.get("state") ||
    !formData.get("gender")
  ) {
    throw new Error("Please fill the form details correctly");
  }

  const existingStateRep = await prisma.stateRep.findUnique({
    where: { email: formData.get("email") as string },
  });

  if (existingStateRep) {
    throw new Error("State Rep with this email already exists");
  } else {
    await prisma.stateRep.create({
      data: {
        name: formData.get("fullname") as string,
        email: formData.get("email") as string,
        state: formData.get("state") as string,
        phoneNumber: formData.get("phone") as string,
        gender: formData.get("gender") as string,
        LGA: formData.get("LGA") as string,
      },
    });
    revalidatePath("/");
  }
};

//Uploads user profile image in the database
export const uploadUserImage = async (formData: FormData) => {
  const file = formData.get("file") as File;

  if (!file) {
    throw new Error("No file detected");
  }

  const session = await getSession();

  if (file.size > 1048576) {
    throw new Error("File is too large");
  }

  const { data: image, error: uploadError } = await supabase.storage
    .from("ljefiles")
    .upload(`${file.name}`, file);
  if (uploadError) {
    throw uploadError;
  }

  if (image) {
    console.log(image);
  }

  const { data: imgUrl } = await supabase.storage
    .from("ljefiles")
    .getPublicUrl(`${file.name}`);
  if (imgUrl) {
    await prisma.user.update({
      where: { id: session?.user?.id },
      data: {
        image: imgUrl.publicUrl,
      },
    });
  }

  // Get the public URL of the uploaded image
  // const publicURL = supabase.storage
  //   .from("ljefiles")
  //   .getPublicUrl(data.path).publicURL;

  // if (!publicURL) {
  //   throw new Error("Failed to get public URL");
  // }

  // await prisma.user.update({
  //   where: { id: session?.user?.id },
  //   data: {
  //     image: publicURL,
  //   },
  // });

  redirect("/dashboard");
};
