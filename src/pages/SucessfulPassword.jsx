import React from "react";
import ResetPassLayout from "@/components/layout/ResetPassLayout";
import passSuccess from "@/assets/sucessPassword.webp";

const SucessfulPassword = () => {
  return (
    <ResetPassLayout
      buttonText="Login"
      header="Successful Password Reset"
      subhead="Your password has been reset successfully. You can now log in with your new password."
      width={60}
      to="/login"
      topLines={true}
    >
      <div className="w-110 h-60 mx-auto mb-5">
        <img
          src={passSuccess}
          alt="Password Reset Success"
          className="w-full h-full object-contain"
        />
      </div>
    </ResetPassLayout>
  );
};

export default SucessfulPassword;
