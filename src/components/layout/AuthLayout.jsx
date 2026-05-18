import React from "react";
import LeftLogo from "@/components/ui/LeftLogo";
import "../../index.css";
import Logo from "../ui/Logo";
import lines from "@/assets/lines.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="relative flex flex-col md:flex-row w-full min-h-screen">
      <div className="hidden md:block md:w-1/2">
        <LeftLogo />
      </div>

      <div className="w-full flex flex-col items-center h-full justify-center">
        <div className="w-full">
          <Logo />
          {children}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-120 h-100 pointer-events-none">
        <img src={lines} alt="lines" className="w-full h-full" />
      </div>
    </div>
  );
};

export default AuthLayout;