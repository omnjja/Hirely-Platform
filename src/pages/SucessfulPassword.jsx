import React from "react";
import ResetPassLayout from "@/components/layout/ResetPassLayout";
import passSuccess from "@/assets/success pass.png";

const SucessfulPassword = () => {
  return (
    <ResetPassLayout
      buttonText="Login"
      header="Successful Password Reset"
      subhead="Your password has been reset successfully. You can now log in with your new password."
      width={60}
      to="/login"
    >
      <div className="w-45 h-45 mx-auto mb-5">
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
