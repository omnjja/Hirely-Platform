import Skeleton from "@/components/ui/Skeleton";
import React from "react";

const TopMatchesJobsSkeleton = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* Title */}
      <div className="space-y-3">
        <Skeleton className="h-7 w-52" />
        <Skeleton className="h-5 w-72" />
      </div>

      <div className="flex flex-col md:flex-row gap-7">
        {/* Left Card */}
        <div className="w-full md:w-2/3 flex flex-col sm:flex-row justify-between p-6 border-3 border-[#EEF1F3] rounded-[48px]">
          {/* Image */}
          <div className="relative w-full sm:w-60 h-65 sm:h-75 rounded-[32px] overflow-hidden mb-4 sm:mb-0">
            <Skeleton className="absolute top-4 left-4 h-8 w-24 rounded-full z-10" />
            <Skeleton className="w-full h-full rounded-[32px]" />
          </div>

          {/* Content */}
          <div className="w-full sm:w-1/2 flex flex-col justify-between">
            <div className="space-y-5">
              <Skeleton className="h-7 w-32 rounded-full" />

              <div className="space-y-3">
                <Skeleton className="h-8 w-56" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>

            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center gap-3">
                <Skeleton className="h-12 w-12 rounded-full" />
                <Skeleton className="h-5 w-28" />
              </div>

              <Skeleton className="h-11 w-32 rounded-full" />
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="w-full md:w-1/3 flex flex-col justify-between p-6 bg-[#EEF1F3] border-3 border-[#EEF1F3] rounded-[48px]">
          <div className="space-y-5">
            <div className="flex justify-between items-center">
              <Skeleton className="h-14 w-14 rounded-full" />

              <div className="space-y-2 flex flex-col items-end">
                <Skeleton className="h-6 w-12" />
                <Skeleton className="h-3 w-10" />
              </div>
            </div>

            <div className="space-y-2">
              <Skeleton className="h-7 w-44" />
              <Skeleton className="h-5 w-36" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          </div>

          <Skeleton className="h-12 w-full rounded-full mt-8" />
        </div>
      </div>
    </div>
  );
};

export default TopMatchesJobsSkeleton;
