import React from "react";
import LeftLogo from "@/components/ui/LeftLogo";
import "../../index.css";
import Logo from "../ui/Logo";
import Lines from "../ui/Lines";

const AuthLayout = ({ children }) => {
  return (
    <div className="relative flex flex-col md:flex-row w-full min-h-screen">
      <div className="hidden md:block md:w-1/2">
        <LeftLogo />
      </div>

      <div className="w-full flex flex-col items-center h-full justify-center">
        <main className="w-full">
          <Logo />
          {children}
        </main>
      </div>
      <Lines place={"lowerRight"} />
    </div>
  );
};

export default AuthLayout;
