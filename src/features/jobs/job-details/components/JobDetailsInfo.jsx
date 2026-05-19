import React from "react";
import { Briefcase, CircleDollarSign, MapPinned, Users } from "lucide-react";
import JobDetailsInfoCard from "./JobDetailsInfoCard";
import { formatText } from "@/utils/formatText";
import { formatText } from "@/utils/formatText";

const JobDetailsInfo = ({ jobType, minSalary, maxSalary, location, count }) => {
  const jobTypeFixed = formatText(jobType);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
      <JobDetailsInfoCard
        title={"Salary Range"}
        value={`$${minSalary} - $${maxSalary}`}
        icon={<CircleDollarSign size={16} className="text-[#1B41AA]" />}
      />
      <JobDetailsInfoCard
        title={"Job Type"}
        value={formatText(jobType)}
        icon={<Briefcase size={16} className="text-[#1B41AA]" />}
      />
      <JobDetailsInfoCard
        title={"Location"}
        value={location}
        icon={<MapPinned size={16} className="text-[#1B41AA]" />}
      />
      <JobDetailsInfoCard
        title={"Applied"}
        value={count || "Be First!"}
        icon={<Users size={16} className="text-[#1B41AA]" />}
      />
    </div>
  );
};

export default JobDetailsInfo;
