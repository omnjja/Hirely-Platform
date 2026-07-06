import React from "react";

const MatchCardSkeleton = () => {
  return (
    <div className="border-b-4 border-[#1BA2A5] animate-pulse">
      <div className="h-4 w-24 bg-slate-200 rounded mb-2" />
      <div className="h-7 w-32 bg-slate-200 rounded mb-2" />
      <div className="flex items-center gap-3 mb-2">
        <div className="h-4 w-48 bg-slate-200 rounded" />
        <div className="rounded-full w-14 h-12 bg-slate-200" />
      </div>
    </div>
  );
};

export default MatchCardSkeleton;
