import React, { memo } from "react";
import { Timer } from "lucide-react";
import { formatTime } from "@/utils/formatTime";

const RecordingTimer = ({ elapsed, totalDuration }) => {
  return (
    <div className="flex items-center gap-1 rounded-full bg-[#EEF1F3] px-4 py-2 shadow-sm">
      <Timer color="#0576D6" size={20} />
      <span className="font-[Plus Jakarta Sans] text-base font-bold tracking-wider text-[#0576D6]">
        {formatTime(elapsed)}
      </span>
      <span className="text-[10px] font-semibold text-[#595C5E99]">
        / {formatTime(totalDuration)}
      </span>
    </div>
  );
};

export default memo(RecordingTimer);
