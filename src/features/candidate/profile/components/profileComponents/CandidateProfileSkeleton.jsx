import React from "react";

const CandidateProfileSkeleton = () => (
  <div className="animate-pulse space-y-4">
    <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-4">
      <div className="flex items-start gap-4 md:contents">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-200 shrink-0" />
        <div className="flex md:hidden flex-col gap-2 ml-auto">
          <div className="h-8 w-24 bg-gray-200 rounded-lg" />
          <div className="h-8 w-24 bg-gray-200 rounded-lg" />
        </div>
      </div>
      <div className="flex-1 space-y-3">
        <div className="flex justify-between">
          <div className="space-y-2">
            <div className="h-5 w-40 bg-gray-200 rounded" />
            <div className="h-4 w-28 bg-gray-200 rounded" />
            <div className="h-3 w-72 bg-gray-200 rounded" />
            <div className="h-3 w-60 bg-gray-200 rounded" />
          </div>
          <div className="hidden md:flex flex-col gap-2">
            <div className="h-8 w-28 bg-gray-200 rounded-lg" />
            <div className="h-8 w-28 bg-gray-200 rounded-lg" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 pt-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded w-3/4" />
          ))}
        </div>
        <div className="flex gap-5 pt-1">
          <div className="h-4 w-16 bg-gray-200 rounded" />
          <div className="h-4 w-16 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
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
