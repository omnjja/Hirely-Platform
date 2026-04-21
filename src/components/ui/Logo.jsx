import React from "react";
import logo from "../../assets/HirelyLogoRemovebg.png";

const Logo = () => {
  return (
    <div className="w-full md:block flex justify-start">
      <img
        src={logo}
        alt="Hirely Logo"
        className="
          w-20
          md:w-32
          h-16
          md:h-20
          object-contain
        "
      />
    </div>
  );
};

export default Logo;
