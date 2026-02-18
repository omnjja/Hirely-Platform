import React from "react";
import LeftLogo from "../ui/LeftLogo";
import "../../index.css";
import Logo from "../ui/Logo";
const AuthLayout = ({ children }) => {
  return (
    <div className="flex w-full min-h-screen">
      <div className="w-1/2">
        <LeftLogo />
      </div>
      <div className="w-1/2">
        <div>
          <Logo />
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
