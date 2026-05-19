import React from "react";
import { MapPin, Clock, Briefcase, CheckCircle, XCircle } from "lucide-react";
import { formatText } from "@/utils/formatText";

const JobCardInfo = ({location, jobType, status, experienceLevel, applicationCount }) => {
  const APPCOUNTTHRESOLD = 1;
  const role = localStorage.getItem("userRole");
  return (
    <div className="flex flex-col gap-2 sm:gap-3">
      <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2 sm:gap-6">
        <div className="flex items-center gap-1.5 sm:w-1/3">
          <MapPin size={16} color="#364153" className="shrink-0" />
          <p className="text-xs sm:text-sm text-[#364153]">{location}</p>
        </div>

        <div className="flex items-center gap-1.5 sm:w-1/2">
          <Clock size={16} color="#364153" className="shrink-0" />
          <p className="text-xs sm:text-sm text-[#364153]">
            {formatText(jobType)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2 sm:gap-6">
        <div className="flex items-center gap-1.5 sm:w-1/3">
          {status === "OPEN" ? (
            <CheckCircle size={16} className="text-green-600" />
          ) : (
            <XCircle size={16} className="text-red-600" />
          )}

          <p
            className={`text-xs sm:text-sm font-medium ${
              status === "OPEN" ? "text-green-600" : "text-red-600"
            }`}
          >
            {status === "OPEN" ? "Open" : "Closed"}
          </p>
        </div>

        <div className="flex items-center gap-1.5 sm:w-1/2">
          <Briefcase size={16} color="#364153" className="shrink-0" />
          <p className="text-xs sm:text-sm text-[#364153]">
            {experienceLevel} Years of experience
          </p>
        </div>
      </div>

      <div className="text-xs sm:text-sm text-[#6A7282]">
        {applicationCount < APPCOUNTTHRESOLD
          ? role === "CANDIDATE" ? "Be the first to apply!" : "No applicants yet"
          : `${applicationCount} applicants`}
      </div>
      <div className="text-[25px] block md:hidden font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-[#1B41AA] to-[#10B981]">
        95% Match Score
      </div>
    </div>
  );
};

export default JobCardInfo;
