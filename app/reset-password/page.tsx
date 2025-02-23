import prisma from "@/utils/db";
import React from "react";
import ChangePasswordForm from "../components/ChangePasswordForm";
import ResetPasswordForm from "../components/ResetPasswordForm";

interface ResetPasswordPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const ResetPasswordPage = async ({ searchParams }: ResetPasswordPageProps) => {
  if (searchParams.token) {
    const user = await prisma.user.findUnique({
      where: { resetPasswordToken: searchParams.token as string },
    });
    if (!user) {
      return "Invalid Token";
    }
    return (
      <ChangePasswordForm resetPasswordToken={searchParams.token as string} />
    );
  } else {
    return <ResetPasswordForm />;
  }
};

export default ResetPasswordPage;
