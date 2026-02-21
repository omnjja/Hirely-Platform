import React from "react";
import LeftLogo from "../components/ui/LeftLogo";
import LoginForm from "../components/layout/LoginForm";
import "../index.css";
import AuthLayout from "../components/layout/AuthLayout";
import ResetPassLayout from "../components/layout/ResetPassLayout";
import InputField from "../components/ui/InputField";
import PasswordField from "../components/ui/PasswordField";
// import passSuccess from "../assets/success pass.png";

const Login = () => {
  return (
    // <div className="w-full h-screen flex bg-[#F4F6F8]">
    //   <div className="w-1/2 h-full">
    //     <LeftLogo />
    //   </div>
    //   <div className="w-1/2">
    //     <LoginForm />
    //   </div>
    // </div>
    <>
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
      {/*   password reset success layout 
      <ResetPassLayout
        buttonText="Login"
        header="Successful Password Reset"
        subhead="Your password has been reset successfully. You can now log in with your new password."
        width={60}
      >
        <div className="w-45 h-45 mx-auto mb-5">
          <img
            src={passSuccess}
            alt="Password Reset Success"
            className="w-full h-full object-contain"
          />
        </div>
      </ResetPassLayout> */}

      {/* reset password layout
      <ResetPassLayout
        buttonText="Reset Password"
        header="Reset Your Password"
        subhead="Enter your new password below"
      >
        <PasswordField label="New Password" name="newPassword" />
        <PasswordField label="Confirm Password" name="confirmPassword" />
      </ResetPassLayout> */}
    </>
  );
};

export default Login;
