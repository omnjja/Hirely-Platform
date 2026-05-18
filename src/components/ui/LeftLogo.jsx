import React from "react";
import sideLogo from "@/assets/authSideLogo.webp";
import "../../index.css";

const LeftLogo = () => {
  return (
    <div className="w-full h-screen">
      <img src={sideLogo} alt="hirely" className="w-full h-full cover-contain" />
    </div>
  );
};

export default LeftLogo;
