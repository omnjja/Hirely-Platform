import React, { memo } from "react";

const CountdownOverlay = ({ phase, countdown }) => {
  if (phase !== "preparing" || countdown === null) return null;

  return (
    <div className="absolute inset-0 z-5 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
      <p className="mb-2 text-sm font-medium text-white">Recording starts in</p>
      <span className="text-7xl font-bold text-white">{countdown}</span>
    </div>
  );
};

export default memo(CountdownOverlay);
