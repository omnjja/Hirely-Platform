import React from "react";
import ApplicationHeaderSkeleton from "./ApplicationHeaderSkeleton";

const ApplicationHeader = ({ data, isLoading }) => {
  if (isLoading) return <ApplicationHeaderSkeleton />;
  const activeApplications = data?.activeCount;

  return (
    <div>
      <p className="text-2xl md:text-4xl font-extrabold mb-2 md:mb-4">
        Application Tracker
      </p>
      <p className="text-sm md:text-[16px] text-gray-600 font-medium">
        You have {activeApplications} active applications in progress.
      </p>
    </div>
  );
};

export default ApplicationHeader;
