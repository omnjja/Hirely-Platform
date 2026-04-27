import React from "react";
import { ExternalLink } from "lucide-react";
import JobDetailsInfoCard from "./JobDetailsInfoCard";

const JobDetailsInfo = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
      <JobDetailsInfoCard
        title={"Salary Range"}
        value={"$180k - $240k"}
        icon={<ExternalLink size={16} className="text-[#1B41AA]" />}
      />
      <JobDetailsInfoCard
        title={"Salary Range"}
        value={"$180k - $240k"}
        icon={<ExternalLink size={16} className="text-[#1B41AA]" />}
      />
      <JobDetailsInfoCard
        title={"Salary Range"}
        value={"$180k - $240k"}
        icon={<ExternalLink size={16} className="text-[#1B41AA]" />}
      />
      <JobDetailsInfoCard
        title={"Salary Range"}
        value={"$180k - $240k"}
        icon={<ExternalLink size={16} className="text-[#1B41AA]" />}
      />
    </div>
  );
};

export default JobDetailsInfo;
