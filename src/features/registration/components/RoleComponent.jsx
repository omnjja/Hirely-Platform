import ButtonComponent from "@/components/ui/ButtonComponent";
import React from "react";
import { useNavigate } from "react-router-dom";

const RoleComponent = ({ name, photo, description, redirectPath }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-3xl p-8 w-full max-w-sm shadow-md hover:shadow-xl  transition-all duration-300 flex flex-col items-center gap-4 border border-gray-100">
      <div className="w-24 h-24 flex items-center justify-center">
        <img src={photo} alt="User Icon" className="w-24 h-24 object-contain" />
      </div>

      <h2 className="text-xl font-bold text-[#2E2E2E] tracking-tight">
        I am a {name}
      </h2>

      <p className="text-sm text-[#6a7282] text-center leading-relaxed font-family-inter">
        {description}
      </p>

      <ButtonComponent
        text={`Register as ${name}`}
        fullWidth
        onClick={() => navigate(redirectPath)}
      />
    </div>
  );
};

export default RoleComponent;
