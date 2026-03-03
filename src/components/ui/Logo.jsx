import React from "react";
import logo from "../../assets/HirelyLogoRemovebg.png";

const Logo = () => {
  return (
    <div className="w-full md:block flex justify-start">
      <img
        src={logo}
        alt="Hirely Logo"
        className="
          w-24
          md:w-32
          h-auto
          object-contain
        "
      />
    </div>
  );
};

export default Logo;
