import React, { useState } from "react";
import { APPLICATION_STATUSES } from "@/constants/applicationStatus";

const ApplicationStatus = () => {
  const [activeStatus, setActiveStatus] = useState(APPLICATION_STATUSES.ALL);
  const statuses = Object.values(APPLICATION_STATUSES);

  return (
    <div className="flex flex-wrap gap-2 md:gap-8 mt-6 md:mt-10">
      {statuses.map((stat) => (
        <button
          key={stat}
          onClick={() => setActiveStatus(stat)}
          className={`h-9 px-3 md:px-6 text-sm rounded-full whitespace-nowrap font-semibold ${
            activeStatus === stat
              ? "bg-[#0576D6] text-white"
              : "bg-[#EEF1F3] text-black"
          }`}
        >
          {stat}
        </button>
      ))}
    </div>
  );
};

export default ApplicationStatus;
