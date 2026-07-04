import React from "react";
import Card from "@/components/ui/Card";
import jobImg from "@/assets/JobDeatilsBG.webp";

const JobDetailsHeader = ({ title, department, location }) => {
  return (
    <Card
      className="overflow-hidden relative h-48 sm:h-72 md:h-95"
      rounded="rounded-4xl"
    >
      <div className="absolute inset-0 w-full h-full">
        <img
          src={jobImg}
          alt="Job Details Background"
          loading="lazy"
          className="w-full h-full object-contain object-bottom sm:object-cover"
        />
      </div>

      <div className="flex items-center gap-3">
        <div className="shrink-0 flex items-center justify-center bg-black text-white font-bold w-8 h-8 sm:w-12 sm:h-12 rounded-lg text-xs sm:text-base">
          {title?.charAt(0)?.toUpperCase() || "J"}
        </div>
        <div>
          <p className="font-semibold text-[#1B41AA] text-sm sm:text-2xl leading-tight">
            {title}
          </p>
          <p className="text-xs sm:text-sm text-[#1B41AA]">
            {department} • {location}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default JobDetailsHeader;
