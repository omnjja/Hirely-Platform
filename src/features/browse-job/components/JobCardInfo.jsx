import React from "react";
import { MapPin, Clock, Users, Briefcase } from "lucide-react";

const JobCardInfo = () => {
  return (
    <div className="flex flex-col gap-2 sm:gap-3">
      <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2 sm:gap-6">
        <div className="flex items-center gap-1.5">
          <MapPin size={16} color="#364153" className="shrink-0" />
          <p className="text-xs sm:text-sm text-[#364153]">Cairo, Egypt</p>
        </div>

        <div className="flex items-center gap-1.5">
          <Clock size={16} color="#364153" className="shrink-0" />
          <p className="text-xs sm:text-sm text-[#364153]">Full Time</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2 sm:gap-6">
        <div className="flex items-center gap-1.5">
          <Users size={16} color="#364153" className="shrink-0" />
          <p className="text-xs sm:text-sm text-[#364153]">Hybrid</p>
        </div>

        <div className="flex items-center gap-1.5">
          <Briefcase size={16} color="#364153" className="shrink-0" />
          <p className="text-xs sm:text-sm text-[#364153]">
            New grad, Entry Level
          </p>
        </div>
      </div>

      <div className="text-xs sm:text-sm text-[#6A7282]">
        Less than 25 applicants
      </div>
    </div>
  );
};

export default JobCardInfo;
