import React from "react";
import ResetPassLayout from "../../../components/layout/ResetPassLayout";
import PasswordField from "../../../components/ui/PasswordField";

const ResetPassword = () => {
  return (
    <ResetPassLayout
      buttonText="Reset Password"
      header="Reset Your Password"
      subhead="Enter your new password below"
    >
      <PasswordField label="New Password" name="newPassword" />
      <PasswordField label="Confirm Password" name="confirmPassword" />
    </ResetPassLayout>
  );
};

export default ResetPassword;
