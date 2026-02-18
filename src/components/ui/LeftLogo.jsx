import React from "react";
import bgLogo from "../../assets/BgPhotoLogo.jpg";

const LeftLogo = () => {
  return (
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `url(${bgLogo})`,
      }}
    >
      <h1 className="">
        Hire<span>Ly</span>
      </h1>
      <text>Hiring made simple, human, and smart</text>
    </div>
  );
};

export default LeftLogo;
