import React from "react";

const JobSkeleton = () => {
  return (
    <div className="animate-pulse rounded-2xl border border-gray-100 bg-white p-5 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-200" />
        <div className="flex flex-col gap-1.5">
          <div className="h-3.5 w-36 bg-gray-200 rounded-full" />
          <div className="h-3 w-24 bg-gray-100 rounded-full" />
        </div>
      </div>
      <div className="h-4 w-2/3 bg-gray-200 rounded-full" />
      <div className="flex gap-4">
        <div className="h-3 w-20 bg-gray-100 rounded-full" />
        <div className="h-3 w-20 bg-gray-100 rounded-full" />
      </div>
    </div>
  );
};

export default JobSkeleton;
