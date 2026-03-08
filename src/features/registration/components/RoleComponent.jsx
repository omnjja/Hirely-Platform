import ButtonComponent from "@/components/ui/ButtonComponent";
import React from "react";
import { useNavigate } from "react-router-dom";
import useChooseRoleMutation from "../hooks/useChooseRoleMutation";

const RoleComponent = ({
  id,
  name,
  photo,
  description,
  redirectPath,
  isLoading,
  setIsLoading,
}) => {
  const { mutateAsync: selectRole, isPending } = useChooseRoleMutation();

  const navigate = useNavigate();
  const onSubmit = async (role) => {
    setIsLoading(true);
    try {
      await selectRole(role);
      navigate(redirectPath);
    } catch {
      // handle error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 w-full max-w-sm shadow-md hover:shadow-xl  transition-all duration-300 flex flex-col items-center gap-4 border border-gray-100">
      <div className="w-24 h-24 flex items-center justify-center">
        <img src={photo} alt="User Icon" className="w-24 h-24 object-contain" />
      </div>

      <div className="text-xl font-bold text-[#2E2E2E] tracking-tight">
        I am a {name}
      </div>

      <p className="text-sm text-[#6a7282] text-center leading-relaxed font-family-inter">
        {description}
      </p>

      <ButtonComponent
        text={`Register as ${name}`}
        fullWidth
        onClick={() => onSubmit(id)}
        disabled={isLoading}
      />
    </div>
  );
};

export default RoleComponent;
