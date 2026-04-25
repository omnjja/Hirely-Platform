import React from "react";
import { Ellipsis } from "lucide-react";

const JobCardHeader = () => {
  return (
    <div className="flex items-start justify-between gap-2">
      <div className="flex flex-col gap-1 sm:gap-1.5 min-w-0">
        <p className="bg-[#FFFBEB] text-[#BB4D00] text-xs rounded-[8px] w-fit p-1">
          Be an early applicant
        </p>

        <p className="text-[#0A0A0A] font-semibold text-base sm:text-xl leading-tight">
          Junior Graphic Designer
        </p>

        <p className="text-[#0A0A0A] text-xs sm:text-sm line-clamp-2">
          Dealer eProcess / Advertising · Marketing · Growth Stage
        </p>
      </div>

      {/* Timestamp */}
      <div className="flex items-center gap-1.5 shrink-0">
        <p className="text-[#6A7282] text-xs hidden sm:block whitespace-nowrap">
          9h ago
        </p>
        <Ellipsis size={14} color="#6A7282" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default JobCardHeader;
