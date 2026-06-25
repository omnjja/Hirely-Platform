import React from "react";
import { Lightbulb } from "lucide-react";

const analysisStages = [
  { label: "Communication Skills", percentage: 92 },
  { label: "Confidence Level", percentage: 78 },
  { label: "Answer Clarity", percentage: 88 },
];

const CoreCompetenciesCard = () => {
  return (
    <div className="bg-[#0576D6] text-white p-6 rounded-2xl ">
      <p className="font-semibold text-lg">Core Competencies</p>
      <div className="flex flex-col gap-6 my-4">
        {analysisStages.map(({ label, percentage }) => (
        <div key={label} className="text-white">
          <div className="flex justify-between mb-1">
            <p className="text-[11px] md:text-[12px] font-semibold">{label}</p>
            <p className="text-[11px] md:text-[12px] font-semibold text-[#1FA4A7]">
              {percentage}%
            </p>
          </div>
          <div className="bg-[#F0F4F7] rounded h-2 overflow-hidden">
            <div
              className="h-full rounded"
              style={{
                width: `${percentage}%`,
                background: "#1FA4A7",
              }}
            />
          </div>
        </div>
      ))}
      </div>
      <div className="flex items-center gap-2 bg-[#E1E3E44D] p-2 rounded-2xl mx-4">
        <Lightbulb className="inline w-4 h-4 text-amber-100 fill-amber-100" />
        <span className="text-sm ">
          shows high emotional intelligence. Communication was structured and
          easy to follow
        </span>
      </div>
    </div>
  );
};

export default CoreCompetenciesCard;
