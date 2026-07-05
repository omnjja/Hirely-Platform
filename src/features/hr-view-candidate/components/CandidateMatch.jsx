import React from "react";

const CandidateMatch = ({ data }) => {
  const { score, matchingSkills, summary } = data;
  return (
    <div className="flex w-full gap-2 justify-start items-center bg-[#4C58A60D] border border-[#0A0A0A] rounded-xl p-5">
      <div className="border-6 rounded-full shrink-0 h-40 w-40 border-[#1FA4A7] flex flex-col justify-center items-center">
        <span className="text-[#0576D6] text-[40px] font-extrabold">
          {Math.round(score)}
        </span>
        <p className="text-[#454652] text-xl font-medium"> out of 100</p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-xl font-bold text-[#2A3439]">
          Architectural Alignment
        </p>
        <p className="font-semibold text-sm text-[#566166]">{summary}</p>
        <div>
          {matchingSkills.length > 0 ? (
            <div>
              <p className="text-[#4C58A6] text-xs font-semibold mb-1 ml-1">
                Matching Skills
              </p>
              <div className="flex gap-3 justify-start">
                {matchingSkills.map((item) => (
                  <div
                    key={item}
                    className="text-[#4C58A6] font-medium text-[11px] rounded-2xl bg-[#4C58A633] py-1 px-2"
                  >
                    {item}
                  </div>
                ))}
                )
              </div>
            </div>
          ) : (
            <p className="text-[#566166] text-[11px] font-medium">
              No matching skills found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CandidateMatch;
