import React from "react";
import Logo from "@/components/ui/Logo";
import candidateLogo from "@/assets/candidate_image.png";
import recruiterLogo from "@/assets/hr_image.png";
import RoleComponent from "../components/RoleComponent";

const RoleSelection = () => {
  const roles = [
    {
      name: "Candidate",
      photo: candidateLogo,
      description:
        "Looking for your next career opportunity? Create your profile and get discovered by top companies.",
    },
    {
      name: "HR/Recruiter",
      photo: recruiterLogo,
      description:
        "Find the perfect candidates for your company. Register and start posting jobs today.",
    },
  ];

  return (
    <div className="min-h-screen px-4 py-6 md:py-0">
      <Logo />
      <div className="flex flex-col gap-2 text-center mt-6 mb-12">
        <p className="text-2xl md:text-[45px] font-bold text-center text-[#1B41AA]">
          Welcome to Hire<p className="inline-block text-[#10B981]">Ly</p>
        </p>
        <p className="text-center text-[#5a616d]">
          Connect top talent with great companies
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        {roles.map((role) => (
          <RoleComponent
            key={role.name}
            name={role.name}
            photo={role.photo}
            description={role.description}
          />
        ))}
      </div>
    </div>
  );
};

export default RoleSelection;
