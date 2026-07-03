import React from "react";
import Skeleton from "@/components/ui/Skeleton";

const ActiveHiringSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl border border-black p-6">
      <div className="flex items-center justify-between mb-5">
        <Skeleton className="h-3.5 w-44" />
        <Skeleton className="h-3 w-28" />
      </div>
      {/* Table header */}
      <div className="bg-slate-50 flex gap-3 px-3 py-2.5 rounded mb-1">
        {[140, 100, 160, 100, 60].map((w, i) => (
          <Skeleton key={i} className="h-2.5 rounded" style={{ width: w }} />
        ))}
      </div>
      {/* Table rows */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-3 px-3 py-4 border-t border-slate-100"
        >
          <div className="flex flex-col gap-1.5" style={{ width: 140 }}>
            <Skeleton className="h-3 w-36" />
            <Skeleton className="h-2 w-20" />
          </div>
          <Skeleton className="h-3 rounded" style={{ width: 100 }} />
          <div className="flex items-center gap-2" style={{ width: 160 }}>
            <Skeleton className="h-2 flex-1 rounded-full" />
            <Skeleton className="h-3 w-8" />
          </div>
          <Skeleton className="h-3 rounded" style={{ width: 100 }} />
          <Skeleton className="h-7 w-7 rounded-lg" style={{ width: 60 }} />
        </div>
      ))}
    </div>
  );
};

export default ActiveHiringSkeleton;
