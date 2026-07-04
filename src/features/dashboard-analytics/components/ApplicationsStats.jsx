import StatCard from "@/components/ui/StatCard";
import React from "react";
import DashboardStatsSkeleton from "./loading-skeletons/DashboardStatsSkeleton";

const ApplicationsStats = ({
  totalApplications,
  applicationsToday,
  averageMatchScore,
  shortlistedCandidates,
  isLoading,
  error,
}) => {
  if (isLoading) return <DashboardStatsSkeleton />;
  if (error) return;
  const shortlistedPerecntage =
    (shortlistedCandidates / totalApplications) * 100;
  const applicationsIncreasing = (applicationsToday / totalApplications) * 100;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-4 gap-4">
      <StatCard
        title="Total Applicants"
        value={totalApplications}
        description={
          applicationsIncreasing ? `+${applicationsIncreasing.toFixed()}%` : ""
        }
        bg_color="bg-[#fff]"
        value_color="text-[#0576D6]"
        description_color="text-[#0576D6]"
        side_by_side
      />
      <StatCard
        title="New Today"
        value={applicationsToday}
        description="applied"
        bg_color="bg-[#F0F4F7]"
        value_color="text-[#2A3439]"
        description_color="text-[#575F75]"
        side_by_side
      />
      <StatCard
        title="Shortlisted"
        value={shortlistedCandidates}
        description={
          shortlistedPerecntage ? `${shortlistedPerecntage.toFixed()}% total` : ""
        }
        title_color="text-[#4A5167]"
        bg_color="bg-[#DAE2FD]"
        value_color="text-[#4A5167]"
        description_color="text-[#4A5167]"
        side_by_side
      />
      <StatCard
        title="Avg. Match Score"
        value={averageMatchScore || 0}
        description=""
        bg_color="bg-[#0576D6]"
        value_color="text-[#F9F6FF]"
        title_color="text-[#F9F6FF]"
        side_by_side
      />
    </div>
  );
};

export default ApplicationsStats;
