import React from "react";

const JobCardSecondary = ({ job }) => {
  const { jobTitle, company, location, matchScore, matchReason, icon } = job;
  return (
    <div className="border-l-4 border-l-[#006A6266] my-4 p-2">
      <div className="flex justify-between text-lg font-semibold">
        <p className="text-[#0576D6]">{icon}</p>
        <p className="text-[#1BA2A5] ">{matchScore}</p>
      </div>
      <div>
        <p className="text-[#191C1D] font-bold text-[16px]">{jobTitle}</p>
        <p className="text-[#454652] text-xs">
          {company} . {location}
        </p>
        <p className="text-[#454652] text-xs mt-2">{matchReason}</p>
      </div>
    </div>
  );
};

export default JobCardSecondary;
