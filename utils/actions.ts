"use server";

import { genSaltSync, hashSync } from "bcrypt-ts";
import prisma from "./db";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { getSession } from "./getSession";
import { revalidatePath } from "next/cache";
import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL; // Your Supabase URL
const supabaseKey = process.env.SUPABASE_ANON_KEY; // Your Supabase Anon Key
const supabase = createClient(supabaseUrl as string, supabaseKey as string);

const resend = new Resend(process.env.RESEND_API_KEY);

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
    return "Invalid Credentials";
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
    return "User not found";
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

  const { data, error } = await resend.emails.send({
    from: "LJE-Nigeria <admin@mail.ljenigeria.org>",
    to: [email],
    subject: "Reset Password - LJE Nigeria",
    html: `<div>
     <h1>
      Reset password for <b>${user.userName}</b>
     </h1>
     <p>
       To reset your password, click on this link and follow the instructions:{" "}
       <a href="https://ljenigeria.org/reset-password?token=${resetPasswordToken}">
         Click here to reset
       </a>
     </p>
   </div>`,
  });

  if (error) {
    console.log(error);
  }

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
    return "Please fill the form details correctly";
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(formData.get("email") as string)) {
    return "Invalid email";
  }

  if (
    (formData.get("password") as string) !=
    (formData.get("confirmpassword") as string)
  ) {
    return "Passwords do not match";
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

  if (existingUserEmail) {
    return "User already exists";
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
      email: (formData.get("email") as string)?.toLowerCase(),
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
  const { data, error } = await resend.emails.send({
    from: "LJE-Nigeria <admin@mail.ljenigeria.org>",
    to: [formData.get("email") as string],
    subject: "Welcome to LJE Nigeria",
    html: `<div>
    <h1>
      Welcome to LJE Nigeria</b>
    </h1>
    <p>
      Welcome to LJE Nigeria, we are excited to have you on board. The Leadership Hub, Justice and Economic Advancement is a radical leadership, justice and economic emancipation movement formed in the year 2023 with the aim of bringing together revolutionary, activists community-based organizations as well as lobby groups under the umbrella of the organization for the purpose of pursuing the struggle for economic emancipation.</p>
  </div>`,
  });

  if (error) {
    console.log(error);
  }

  redirect("/login?signupsucess=true");
};

// Creates a new announcement (Admin Privilages)
export const createAnnouncement = async (formData: FormData) => {
  const announcementTitle = await prisma.announcement.findFirst({
    where: { permalink: formData.get("permalink") as string },
  });

  const file = formData.get("file") as File;

  if (!file) {
    return "No file detected";
  }

  if (announcementTitle) {
    return "This post probably already exists";
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
    return "Please fill the form details correctly";
  }

  const existingStateRep = await prisma.stateRep.findUnique({
    where: { email: formData.get("email") as string },
  });

  if (existingStateRep) {
    return "State Rep with this email already exists";
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
    return "No file detected";
  }

  const session = await getSession();

  if (file.size > 1048576) {
    return "File is too large";
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
