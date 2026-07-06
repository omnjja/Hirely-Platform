import React from "react";

const ApplicationHeaderSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="h-8 md:h-10 w-64 bg-slate-200 rounded mb-2 md:mb-4" />
      <div className="h-4 w-72 bg-slate-200 rounded" />
    </div>
  );
};

export default ApplicationHeaderSkeleton;
