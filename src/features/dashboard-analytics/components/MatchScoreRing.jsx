import React from "react";

const MatchScoreRing = ({ score }) => {
  const isStrong = score >= 60;
  return (
    <div
      className={`flex h-11 w-11 items-center justify-center rounded-full border-[3px] text-xs font-bold ${
        isStrong
          ? "border-blue-600 text-blue-600"
          : "border-rose-300 text-rose-500"
      }`}
    >
      {score}%
    </div>
  );
};

export default MatchScoreRing;
