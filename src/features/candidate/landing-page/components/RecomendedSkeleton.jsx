import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import React from "react";

const RecomendedSkeleton = () => {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="h-6 w-48 bg-gray-200 rounded-md animate-pulse" />
      <div className="flex gap-3 w-max pb-4 snap-x snap-mandatory">
        {[1, 2, 3, 4, 5].map((indx) => (
          <div
            key={indx}
            className="flex flex-col gap-3 p-4 rounded-4xl bg-white shadow-sm max-w-62.5 shrink-0"
          >
            <div className="flex gap-2 items-center">
              <div className="h-6 w-6 rounded-full bg-gray-200 animate-pulse" />
              <div className="h-5 w-20 rounded-full bg-gray-200 animate-pulse" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
              <div className="h-3 w-40 bg-gray-200 rounded animate-pulse" />
            </div>

            <div className="flex gap-2">
              <div className="h-5 w-16 rounded-full bg-gray-200 animate-pulse" />
              <div className="h-5 w-20 rounded-full bg-gray-200 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecomendedSkeleton;
