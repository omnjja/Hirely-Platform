import React from "react";
import LeftLogo from "../ui/LeftLogo";
import "../../index.css";
import Logo from "../ui/Logo";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Left side – hidden on mobile */}
      <div className="hidden md:block md:w-1/2">
        <LeftLogo />
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <div className="w-full">
          <Logo />
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
