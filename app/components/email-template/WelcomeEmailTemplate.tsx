import * as React from "react";

interface EmailTemplateProps {
  userName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  userName,
}) => (
  <div>
    <h1>Welcome, {userName}!</h1>
  </div>
);
