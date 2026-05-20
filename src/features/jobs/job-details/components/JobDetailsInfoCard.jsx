import React from "react";
import Card from "@/components/ui/Card";

const JobDetailsInfoCard = ({ title, value, icon }) => {
  return (
    <Card
      className="flex flex-col gap-1.5 sm:gap-2 items-center sm:items-start"
      rounded="rounded-4xl"
    >
      <div className="flex sm:flex-col gap-1.5 sm:gap-2">
        {icon}
        <p className="text-xs sm:text-sm uppercase tracking-wide text-[#595C5E]">
          {title}
        </p>
      </div>
      <p className="font-bold text-sm sm:text-base text-[#2C2F31]">{value}</p>
    </Card>
  );
};

export default JobDetailsInfoCard;
