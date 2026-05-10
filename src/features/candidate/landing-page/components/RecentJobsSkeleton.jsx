import Card from "@/components/ui/Card";
import React from "react";

const RecentJobsSkeleton = () => {
  return (
    <div className="flex flex-col items-start gap-4 w-full">
      <div className="h-7 w-52 bg-gray-200 rounded animate-pulse" />

      {Array.from({ length: 3 }).map((_, index) => (
        <Card
          key={index}
          className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0"
          rounded="rounded-4xl sm:rounded-[48px]"
        >
          <div className="flex gap-3 sm:gap-5 items-center w-full">
            {/* Avatar */}
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gray-200 animate-pulse shrink-0" />

            <div className="flex flex-col gap-2 w-full">
              {/* Job Title */}
              <div className="h-5 w-40 bg-gray-200 rounded animate-pulse" />

              {/* Company + Salary */}
              <div className="h-4 w-64 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 self-end sm:self-auto">
            <div className="flex flex-col gap-2 items-end">
              {/* Match */}
              <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />

              {/* Skills */}
              <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
            </div>

            {/* Arrow Button */}
            <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse" />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default RecentJobsSkeleton;
