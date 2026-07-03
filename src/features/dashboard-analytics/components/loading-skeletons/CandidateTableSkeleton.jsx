import React from "react";
import SkeletonChip from "@/components/ui/SkeletonChip";

const CandidateTableSkeleton = ({ rows = 4 }) => {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200">
      <div className="grid grid-cols-[2.2fr_1fr_1.6fr_1fr_0.7fr] bg-slate-100 px-5 py-3.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <SkeletonChip key={i} className="h-3 w-24" />
        ))}
      </div>

      <div className="divide-y divide-slate-100 bg-white">
        {Array.from({ length: rows }).map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-[2.2fr_1fr_1.6fr_1fr_0.7fr] items-center px-5 py-4"
          >
            <div className="flex items-center gap-3">
              <SkeletonChip className="h-9 w-9 rounded-lg" />
              <div className="space-y-2">
                <SkeletonChip className="h-3 w-32" />
                <SkeletonChip className="h-2 w-20" />
              </div>
            </div>

            <div className="flex justify-center">
              <SkeletonChip className="h-11 w-11 rounded-full" />
            </div>

            <div className="flex justify-center gap-5">
              {[1, 2, 3].map((j) => (
                <div key={j} className="space-y-2 text-center">
                  <SkeletonChip className="h-2 w-14 mx-auto" />
                  <SkeletonChip className="h-3 w-10 mx-auto" />
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <SkeletonChip className="h-6 w-20 rounded-full" />
            </div>
            <div className="flex justify-end gap-3">
              <SkeletonChip className="h-4 w-4" />
              <SkeletonChip className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t px-5 py-3.5">
        <SkeletonChip className="h-3 w-32" />
        <div className="flex gap-2">
          <SkeletonChip className="h-7 w-7 rounded" />
          <SkeletonChip className="h-7 w-7 rounded" />
          <SkeletonChip className="h-7 w-7 rounded" />
        </div>
      </div>
    </div>
  );
};

export default CandidateTableSkeleton;
