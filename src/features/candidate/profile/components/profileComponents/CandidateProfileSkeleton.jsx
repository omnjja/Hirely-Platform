import React from "react";
import ProfileInfoSkeleton from "./ProfileInfoSkeleton";

const CandidateProfileSkeleton = () => (
  <div className="animate-pulse space-y-4">
    <ProfileInfoSkeleton />
    <div className="flex gap-4 border-b border-gray-100 pb-2">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="h-4 w-20 bg-gray-200 rounded" />
      ))}
    </div>
    {Array.from({ length: 3 }).map((_, i) => (
      <div
        key={i}
        className="bg-white border border-gray-200 rounded-2xl p-5 space-y-3"
      >
        <div className="h-5 w-36 bg-gray-200 rounded" />
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-4 w-5/6 bg-gray-200 rounded" />
      </div>
    ))}
  </div>
);

export default CandidateProfileSkeleton;
