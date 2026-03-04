import React from "react";
import Logo from "../ui/Logo";
import ButtonComponent from "../ui/ButtonComponent";

const RegistrationLayout = ({ header, subhead, children }) => {
  return (
    <div className="min-h-screen">
      <Logo />
      <div className="flex flex-col items-center justify-center mb-8 ">
        <p className="text-xl font-bold md:text-2xl">{header}</p>
        <div
          className="bg-white p-6 rounded-lg shadow-md md:w-[50%] mt-4 max-w-xl 
      overflow-y-auto
      max-h-[75vh]"
        >
          <p className="text-[#1B41AA] text-lg font-semibold">{subhead}</p>
          {children}
          <ButtonComponent text="Submit Application" fullWidth />
        </div>
      </div>
    </div>
  );
};

export default RegistrationLayout;
