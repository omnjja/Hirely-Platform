import React from "react";
import basicInfo from "@/assets/basicInfo.webp";

const JobCardPrimary = ({ job }) => {
  const { jobTitle, company, location, matchScore, matchReason } = job;

  return (
    <div className="border-l-4 border-l-[#1BA2A5] my-2">
      <div className="flex mb-6 items-center justify-between gap-10 border border-black rounded-3xl p-4 hover:shadow-lg transition-shadow duration-300">
        <div className="w-20 h-20 shrink-0 hidden rounded-full border-2 border-gray-500 md:flex items-center justify-center">
          <img
            src={basicInfo}
            alt="no image"
            className="w-16 h-16 object-contain filter grayscale brightness-0 invert-[0.3]"
          />
        </div>

        <div>
          <div className="flex justify-between">
            <div>
              <p className="text-[#191C1D] text-[16px] md:text-lg font-semibold">
                {jobTitle}
              </p>
              <p className="text-[#454652] text-sm">
                {company} - {location}
              </p>
            </div>
            <div className="text-[#1BA2A5] mt-2 ">
              <p className="font-stretch-50% font-bold md:font-extrabold md:text-3xl text-2xl">
                {matchScore}
              </p>
              <p className="md:font-bold font-semibold text-xs">Match Score</p>
            </div>
          </div>
          <div className="bg-gray-100 border-[#00066633] border-l-4 mt-4 p-3 rounded-2xl">
            <span className="font-semibold text-sm text-[#0576D6]">
              Why it matches:
            </span>
            <span className="text-[#454652] mt-2 text-sm"> {matchReason}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCardPrimary;
