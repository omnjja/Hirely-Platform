import React from "react";
import { formatDateForDisplay, formatDuration } from "@/utils/DateFormatter";

const HeaderCard = ({ data }) => {
  const { title, interviewDate, interviewDuration } = data;

  return (
    <div className="flex items-end justify-between">
      <div className="flex flex-col gap-1">
        <p className="text-xs md:text-sm font-medium text-[#454652] uppercase">
          Video Interview Analysis
        </p>
        <p className="text-lg md:text-2xl font-bold text-black ">{title}</p>
        <p className="text-xs md:text-sm text-[#454652]">
          Interviewed on {formatDateForDisplay(interviewDate, true)} •{" "}
          {formatDuration(interviewDuration)} duration
        </p>
      </div>
    </div>
  );
};

export default HeaderCard;
