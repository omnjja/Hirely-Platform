import React from "react";
import bgLogo from "../../assets/BgPhotoLogo.jpg";
import "../../index.css";

const LeftLogo = () => {
  return (
    <div
      className="w-full h-full bg-cover bg-center flex justify-center items-center flex-col"
      style={{
        backgroundImage: `url(${bgLogo})`,
      }}
    >
      <p className="text-5xl font-bold py-10 pl-10">
        <span className="text-[#F4F6F8]">Hire</span>
        <span className="text-[#10B981] ">Ly</span>
      </p>
      <p className="text-[#F4F6F8] pl-10 font-medium">
        Hiring made simple, human, and smart
      </p>
    </div>
  );
};

export default LeftLogo;
