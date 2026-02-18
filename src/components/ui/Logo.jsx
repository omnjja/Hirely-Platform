import React from "react";
import logo from "../../assets/HirelyLogoRemovebg.png";

const Logo = () => {
  return (
    <div className="w-32 h-24">
      <img
        src={logo}
        alt="Hirely Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;
