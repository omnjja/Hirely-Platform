import React from "react";

const InterviewSummary = ({ data, current }) => {
  return (
    <div className="border border-[#0A0A0A] rounded-xl p-3">
      <div className="flex justify-between items-center">
        <p className="text-[#2A3439] text-sm font-semibold">Transcript</p>
        <p className="text-[#4A5167] bg-[#DAE2FD] text-[11px] rounded-2xl p-1">
          AI Summary
        </p>
      </div>

      <p className="text-[#566166] text-sm mt-1 w-[80%]">
        {data[current].transcription}
      </p>
    </div>
  );
};

export default InterviewSummary;
