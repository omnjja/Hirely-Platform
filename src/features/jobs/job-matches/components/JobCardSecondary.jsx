import React from "react";

const JobCardSecondary = ({ job }) => {
  const { title, companyName, location } = job.job;
  const { score, matchedSkills } = job;
  return (
    <div className="border-l-4 border-l-[#006A6266] my-4 p-2">
      <div className="flex justify-between text-lg font-semibold">
        <p className="text-[#1BA2A5] ">{Math.round(score * 100)}%</p>
      </div>
      <div>
        <p className="text-[#191C1D] font-bold text-[16px]">{title}</p>
        <p className="text-[#454652] text-xs">
          {companyName} . {location}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {matchedSkills.map((skill, index) => (
            <span
              key={index}
              className=" text-[#454652] bg-[#73748633] px-2 py-1 rounded-2xl text-xs mr-2"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCardSecondary;
