import React from "react";
import { APPLICATION_STATUSES_FILTERS } from "@/constants/applicationStatus";

const ApplicationStatus = ({ setPage, state, setState }) => {
  const statuses = Object.keys(APPLICATION_STATUSES_FILTERS);

  return (
    <div className="flex flex-wrap gap-2 md:gap-8 mt-6 md:mt-10">
      {statuses.map((key) => (
        <button
          key={key}
          onClick={() => {
            setState(key);
            setPage(1);
          }}
          className={`h-9 px-3 md:px-6 text-sm rounded-full whitespace-nowrap font-semibold ${
            state === key
              ? "bg-[#0576D6] text-white"
              : "bg-[#EEF1F3] text-black"
          }`}
        >
          {APPLICATION_STATUSES_FILTERS[key]}
        </button>
      ))}
    </div>
  );
};

export default ApplicationStatus;
