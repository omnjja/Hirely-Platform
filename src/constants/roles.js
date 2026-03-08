import candidateLogo from "@/assets/candidate_image.png";
import recruiterLogo from "@/assets/hr_image.png";

export const ROLES = [
  {
    id: "CANDIDATE",
    name: "Candidate",
    photo: candidateLogo,
    description:
      "Looking for your next career opportunity? Create your profile and get discovered by top companies.",
    redirectPath: "/candidate-registration",
  },
  {
    id: "HR",
    name: "HR/Recruiter",
    photo: recruiterLogo,
    description:
      "Find the perfect candidates for your company. Register and start posting jobs today.",
    redirectPath: "/hr-registration",
  },
];
