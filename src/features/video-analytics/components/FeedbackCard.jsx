import React from "react";

const FeedbackCard = ({ question, score, feedback }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-4">
      <div className="col-span-1">video</div>
      <div className="col-span-2">
        <div className="flex flex-row gap-3 justify-between items-start mb-2">
          <p className="font-semibold text-[#0576D6] text-base">{question}</p>
          <div className="bg-[#1BA2A51A] rounded-2xl px-2 py-1 whitespace-nowrap ">
            <p className="text-[#1BA2A5] font-semibold text-[9px]">{score}</p>
          </div>
        </div>
        <div className="bg-[#F3F4F5] rounded-2xl p-3 text-sm border border-black">
          <p className="font-semibold text-[#454652] text-sm mb-2">
            AI Feedback Report
          </p>
          <p className="text-[#454652] text-xs">{feedback}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
