import React from "react";

const ProgressBar = ({
  progress = 0,
  height = 4,
  bgColor = "#1B41AA",
  className = "",
}) => {
  const safeProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div
      className={`bg-gray-300 rounded overflow-hidden ${className}`}
      style={{ height }}
    >
      <div
        className="h-full rounded"
        style={{
          width: `${safeProgress}%`,
          backgroundColor: bgColor,
          transition: "width 0.3s ease-in-out",
        }}
      />
    </div>
  );
};

export default ProgressBar;
