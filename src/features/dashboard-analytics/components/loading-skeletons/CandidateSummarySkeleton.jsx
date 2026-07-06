import React from "react";
import Card from "@/components/ui/Card";
import SkeletonChip from "@/components/ui/SkeletonChip";

const CandidateSummarySkeleton = () => {
  return (
    <Card className="flex flex-col gap-6" border="border border-slate-200">
      <div className="flex gap-5 items-center">
        <SkeletonChip className="h-10 w-10 rounded-lg" />

        <div className="flex flex-col gap-2">
          <SkeletonChip className="h-4 w-48" />
          <SkeletonChip className="h-3 w-64" />
        </div>
      </div>
      <Card border="border border-slate-200">
        <div className="flex gap-5 items-start">
          <SkeletonChip className="h-5 w-5 rounded" />
          <div className="flex-1 space-y-2">
            <SkeletonChip className="h-3 w-full" />
            <SkeletonChip className="h-3 w-5/6" />
            <SkeletonChip className="h-3 w-4/6" />
          </div>
        </div>
      </Card>
    </Card>
  );
};
export default CandidateSummarySkeleton;
