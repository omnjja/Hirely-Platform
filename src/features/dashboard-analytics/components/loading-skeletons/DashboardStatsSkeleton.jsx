import React from "react";
import SkeletonChip from "@/components/ui/SkeletonChip";

const DashboardStatsSkeleton = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="p-6 rounded-[12px] shadow bg-white">
          <SkeletonChip className="h-3 w-24 mb-4" />
          <div className="flex items-end gap-2">
            <SkeletonChip className="h-10 w-20" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStatsSkeleton;
