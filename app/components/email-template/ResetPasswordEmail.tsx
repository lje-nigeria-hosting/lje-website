import * as React from "react";

interface EmailTemplateProps {
  email: string;
  resetPasswordToken: string;
}

export const ResetPasswordEmailTemplate: React.FC<
  Readonly<EmailTemplateProps>
> = ({ email, resetPasswordToken }) => (
  <div>
    <h1>
      Reset password for <b>{email}</b>
    </h1>
    <p>
      To reset your password, click on this link and follow the instructions:{" "}
      <a href={`localhost:3000/reset-password?token=${resetPasswordToken}`}>
        Click here to reset
      </a>
    </p>
  </div>
);
