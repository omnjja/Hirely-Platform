import React from "react";
import logo from "../../assets/HirelyLogoRemovebg.png";

const Logo = () => {
  return (
    <div className="w-full md:block flex justify-center mt-4">
      <img
        src={logo}
        alt="Hirely Logo"
        className="
          w-24
          md:w-32
          h-28
          object-contain
        "
      />
    </div>
  );
};

export default Logo;
