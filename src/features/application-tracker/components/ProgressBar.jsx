import React from "react";

const ProgressBar = ({ totalStages, currentStage, barColor }) => {
  return (
    <div className="flex gap-1">
      {[...Array(totalStages)].map((_, index) => (
        <div
          key={index}
          className={`h-1.5 rounded-full flex-1 ${index < currentStage ? barColor : "bg-gray-300"}`}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
