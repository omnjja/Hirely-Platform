import React from "react";
import {
  CANDIDATE_FEATURES,
  RECRUITER_FEATURES,
} from "@/constants/landingFeatures";

const LandingContent = () => {
  return (
    <div className="md:w-3/4 w-full md:py-4 md:px-1 md:m-4">
      <div className="flex items-center gap-6 mb-5">
        <div className="flex-1 bg-black/10 h-0.5 " />
        <span className="text-[10.5px] font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap">
          What's inside
        </span>
        <div className="flex-1 bg-black/10 h-0.5" />
      </div>

      <div className="flex flex-wrap md:gap-5 gap-2 justify-start items-start">
        {CANDIDATE_FEATURES.map(({ label, icon }) => (
          <span
            key={label}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#0C447C] text-xs font-medium
                        md:px-4 md:py-2 rounded-full p-2 md:m-0 my-1"
          >
            {icon}
            {label}
          </span>
        ))}
        {RECRUITER_FEATURES.map(({ label, icon }) => (
          <span
            key={label}
            className="inline-flex items-center gap-2 bg-[#E1F5F5] border border-[#B2E8E8] text-[#085041] text-xs font-medium
                        md:px-4 md:py-2 p-2 rounded-full"
          >
            <span style={{ color: "#1BA2A5" }}>{icon}</span>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
