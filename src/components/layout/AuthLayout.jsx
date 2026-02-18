import React from "react";
import LeftLogo from "../ui/LeftLogo";

const AuthLayout = () => {
  return (
    <div className="flex w-full h-full">
      <div className="w-1/2">
        <LeftLogo />
      </div>
      <div>Right Content</div>
    </div>
  );
};

export default AuthLayout;
