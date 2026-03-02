import React from "react";
import Logo from "../../../components/ui/Logo";
import candidateLogo from "../../../assets/candidate_image.png";
import recruiterLogo from "../../../assets/hr_image.png";

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
    <div>
      <Logo />
      <h1 className="text-2xl font-bold text-center mt-4">Select Your Role</h1>
    </div>
  );
};

export default RoleSelection;
