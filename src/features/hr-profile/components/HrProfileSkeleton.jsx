import React from 'react';

const HrProfileSkeleton = () => (
  <div className="flex flex-col gap-4 py-4 w-full animate-pulse">
    <div className="bg-white border border-gray-200 rounded-2xl p-5">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gray-200 shrink-0" />
        <div className="flex-1 space-y-2 min-w-0">
          <div className="h-4 w-36 bg-gray-200 rounded" />
          <div className="h-3 w-24 bg-gray-200 rounded" />
          <div className="h-5 w-28 bg-gray-200 rounded-full" />
        </div>
        <div className="h-8 w-24 bg-gray-200 rounded-lg shrink-0" />
      </div>

      <hr className="my-4 border-gray-100" />

      <div className="flex flex-wrap gap-x-9 md:gap-x-40 gap-y-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-200 rounded shrink-0" />
          <div className="h-3 w-40 bg-gray-200 rounded" />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-200 rounded shrink-0" />
          <div className="h-3 w-28 bg-gray-200 rounded" />
        </div>
      </div>
    </div>

    <div className="bg-white border border-gray-200 rounded-2xl p-5">
      <div className="h-4 w-28 bg-gray-200 rounded mb-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="space-y-1.5">
            <div className="h-3 w-20 bg-gray-200 rounded" />
            <div className="flex items-center gap-1.5">
              <div className="w-3.5 h-3.5 bg-gray-200 rounded shrink-0" />
              <div className="h-4 w-32 bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>

      <hr className="my-4 border-gray-100" />

      <div className="h-3 w-28 bg-gray-200 rounded mb-2" />
      <div className="space-y-1.5">
        <div className="h-3 w-full bg-gray-200 rounded" />
        <div className="h-3 w-5/6 bg-gray-200 rounded" />
        <div className="h-3 w-4/6 bg-gray-200 rounded" />
      </div>
    </div>
  </div>
);

export default HrProfileSkeleton;