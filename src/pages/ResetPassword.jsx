import React from "react";
import ResetPassLayout from "@/components/layout/ResetPassLayout";
import PasswordField from "@/components/ui/PasswordField";
import img from "@/assets/lowerImageForReset.webp";

const ResetPassword = () => {
  return (
    <ResetPassLayout
      buttonText="Reset Password"
      header="Reset Your Password"
      subhead="Enter your new password below"
      topLines={true}
      lowerImage={
        <div className="w-full h-105 pointer-events-none">
          <img src={img} className="w-full h-full" />
        </div>
      }
    >
      <PasswordField label="New Password" name="newPassword" />
      <PasswordField label="Confirm Password" name="confirmPassword" />
    </ResetPassLayout>
  );
};

export default ResetPassword;
