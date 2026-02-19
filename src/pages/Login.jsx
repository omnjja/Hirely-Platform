import React from "react";
import LeftLogo from "../components/ui/LeftLogo";
import LoginForm from "../components/layout/LoginForm";
import "../index.css";
import AuthLayout from "../components/layout/AuthLayout";

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
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
