import React, { useState } from "react";
import Logo from "@/components/ui/Logo";
import RoleComponent from "@/features/registration/components/RoleComponent";
import { ROLES } from "@/constants/roles";
import Lines from "@/components/ui/Lines";

const RoleSelection = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="min-h-screen px-4 py-6 md:py-0">
      <Lines position="upperRight" place="upperRight" />
      <Lines position="lowerLeft" place="lowerLeft" />

      <Logo />
      <div className="flex flex-col gap-2 text-center mt-6 mb-12">
        <div className="text-2xl md:text-[45px] font-bold text-center text-[#1B41AA]">
          Welcome to Hire<p className="inline-block text-[#10B981]">Ly</p>
        </div>
        <div className="text-center text-[#5a616d]">
          Connect top talent with great companies
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        {ROLES.map((role) => (
          <RoleComponent
            key={role.id}
            id={role.id}
            name={role.name}
            photo={role.photo}
            description={role.description}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        ))}
      </div>
    </div>
  );
};

export default RoleSelection;
