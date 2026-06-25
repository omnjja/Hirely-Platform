import React from "react";
import JobCardPrimary from "./JobCardPrimary";
import JobCardSecondary from "./JobCardSecondary";
import useTopMatches from "../hooks/useTopMatches";

const jobs = [
  {
    jobTitle: "Principal Product Architect",
    company: "Lumina Systems",
    location: "Remote",
    matchScore: "98%",
    matchReason:
      "Your recent work on distributed design systems directly aligns with Lumina's core 2024 initiative. Your proficiency in Manrope-driven editorial UI is a 1:1 skill match for their brand refresh.",
    variant: "primary",
  },
  {
    jobTitle: "Senior Frontend Engineer",
    company: "NovaTech",
    location: "Berlin, Germany",
    matchScore: "95%",
    matchReason:
      "Your React and Tailwind experience closely matches NovaTech’s frontend stack. Your past UI optimization work aligns with their performance goals.",
    variant: "primary",
  },
  {
    jobTitle: "UI/UX Designer",
    company: "PixelForge Studio",
    location: "Remote",
    matchScore: "92%",
    matchReason:
      "Your portfolio shows strong UX case studies and design systems, which directly match PixelForge's product design direction.",
    variant: "secondary",
    icon: "🎨",
  },
  {
    jobTitle: "Full Stack Developer",
    company: "CodeSphere",
    location: "Cairo, Egypt",
    matchScore: "90%",
    matchReason:
      "Your experience in React and Node.js aligns well with CodeSphere’s tech stack and their current platform expansion.",
    variant: "secondary",
    icon: "💻",
  },
  {
    jobTitle: "Product Designer",
    company: "InnoLabs",
    location: "Amsterdam, Netherlands",
    matchScore: "93%",
    matchReason:
      "Your background in user-centered design and prototyping tools matches InnoLabs’ focus on building intuitive SaaS products.",
    variant: "primary",
  },
];

const MatchingList = () => {
  const secondary = jobs.filter((j) => j.variant === "secondary");
  const primary = jobs.filter((j) => j.variant === "primary");

  const { data, isLoading, isError } = useTopMatches();
  console.log(data);

  return (
    <div>
      <div className="flex items-center justify-between mt-6 mb-4">
        <p className="text-[#0576D6] text-xl font-semibold">
          Best Matching Roles
        </p>
        <p className="text-[#1BA2A5] font-semibold text-sm ">Top 5 Picks</p>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          {primary.map((job, i) => (
            <JobCardPrimary job={job} key={i} />
          ))}

          <div className="grid grid-cols-2 gap-4">
            {secondary.map((job, i) => (
              <JobCardSecondary job={job} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchingList;
