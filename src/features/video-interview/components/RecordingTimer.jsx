import React, { memo, useEffect, useState } from "react";
import { Timer } from "lucide-react";
import { formatTime } from "@/utils/formatTime";

const RecordingTimer = ({ phase, totalDuration }) => {
  const [elapsed, setElapsed] = useState(0);

  // Reset timer whenever a new recording starts
  useEffect(() => {
    if (phase === "preparing") {
      setElapsed(0);
    }
  }, [phase]);

  useEffect(() => {
    if (phase !== "recording") return;

    const interval = setInterval(() => {
      setElapsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [phase]);

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
