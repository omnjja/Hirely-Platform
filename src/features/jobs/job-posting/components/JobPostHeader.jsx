import React from "react";

const JobPostHeader = ({ mode = "post" }) => {
  const isEditMode = mode === "edit";

  return (
    <div className="mb-4 flex flex-col gap-1">
      <p className="text-[10px] sm:text-sm font-semibold uppercase tracking-widest mb-3">
        <span className="text-gray-500">Jobs</span> -{" "}
        {isEditMode ? "Edit Requisition" : "New Requisition"}
      </p>

      <h1 className="text-lg sm:text-[34px] font-bold text-gray-900">
        {isEditMode ? "Edit Job Posting" : "Create New Job Posting"}
      </h1>

      <p className="text-xs sm:text-lg text-gray-500">
        {isEditMode
          ? "Update the details of your existing job posting and save the changes."
          : "Define the parameters for your next key hire. Use our AI-enhanced editor to refine descriptions and set video screening hurdles."}
      </p>
    </div>
  );
};

export default JobPostHeader;
