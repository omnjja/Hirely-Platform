import React from "react";

const JobPostHeader = () => {
  return (
    <div className="mb-4 flex flex-col gap-1">
      <p className="text-[10px] sm:text-sm font-semibold uppercase tracking-widest mb-3">
        <span className="text-gray-500">Jobs</span> - New Requisition
      </p>

      <h1 className="text-lg sm:text-[34px] font-bold text-gray-900">
        Create New Job Posting
      </h1>

      <p className="text-xs sm:text-lg text-gray-500">
        Define the parameters for your next key hire. Use our AI-enhanced editor
        to refine descriptions and set video screening hurdles.
      </p>
    </div>
  );
};

export default JobPostHeader;
