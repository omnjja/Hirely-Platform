import React from "react";

const CoreCompetenciesCard = ({ data }) => {
  const analysisStages = [
    {
      label: "Communication Skills",
      percentage: data.communication_skills ?? 0,
    },
    { label: "Confidence Level", percentage: data.confidence_level ?? 0 },
    { label: "Answer Clarity", percentage: data.answer_clarity ?? 0 },
  ];

  return (
    <div className="bg-[#0576D6] text-white p-6 rounded-2xl ">
      <p className="font-semibold text-lg">Core Competencies</p>
      <div className="flex flex-col gap-6 my-4">
        {analysisStages.map(({ label, percentage }) => (
          <div key={label} className="text-white">
            <div className="flex justify-between mb-1">
              <p className="text-[11px] md:text-[12px] font-semibold">
                {label}
              </p>
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
    </div>
  );
};

export default CoreCompetenciesCard;
