import React from "react";

const JobListSkeleton = () => (
  <div className="animate-pulse">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl border border-gray-100 overflow-hidden"
        >
          <div className="h-1 w-full bg-gray-200" />
          <div className="p-5 space-y-4">
            {/* company + badge */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gray-200" />
                <div className="space-y-1.5">
                  <div className="h-4 w-28 bg-gray-200 rounded" />
                  <div className="h-3 w-20 bg-gray-200 rounded" />
                </div>
              </div>
              <div className="h-5 w-16 rounded-full bg-gray-200" />
            </div>
            {/* progress bar */}
            <div className="h-2 w-full rounded-full bg-gray-200" />
            {/* button */}
            <div className="h-9 w-full rounded-full bg-gray-100" />
          </div>
        </div>
      ))}
    </div>

    <div className="flex items-center justify-center gap-1.5 py-4 animate-pulse">
      <div className="w-8 h-8 rounded-lg bg-slate-200" />

      {[1, "dots1", 4, 5, 6, "dots2", 12].map((item, i) => (
        <div
          key={i}
          className={`h-8 rounded-lg bg-slate-200 ${
            typeof item === "string" ? "w-6" : "w-8"
          }`}
        />
      ))}

      <div className="w-8 h-8 rounded-lg bg-slate-200" />
    </div>
  </div>
);

export default JobListSkeleton;
