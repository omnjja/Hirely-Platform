import React from "react";
import JobCardSecondarySkeleton from "./JobCardSecondarySkeleton";
import JobCardPrimarySkeleton from "./JobCardPrimarySkeleton";

const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-slate-200 rounded ${className}`} />
);

const MatchingListSkeleton = () => (
  <div>
    {/* header */}
    <div className="flex items-center justify-between mt-6 mb-4">
      <Skeleton className="h-5 w-44" />
      <Skeleton className="h-4 w-20" />
    </div>

    <div className="flex flex-col gap-4">
      {/* 3 primary cards */}
      {Array.from({ length: 3 }).map((_, i) => (
        <JobCardPrimarySkeleton key={i} />
      ))}

      {/* 2 secondary cards */}
      <div className="grid grid-cols-2 gap-4">
        {Array.from({ length: 2 }).map((_, i) => (
          <JobCardSecondarySkeleton key={i} />
        ))}
      </div>
    </div>
  </div>
);

export default MatchingListSkeleton;
