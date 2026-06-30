import React from "react";
import DashboardStats from "@/features/dashboard-analytics/components/DashboardStats";
import ApplicantInflowCard from "@/features/dashboard-analytics/components/ApplicantInflowCard";
import RecruitmentFunnelCard from "@/features/dashboard-analytics/components/RecruitmentFunnelCard";
import ActiveHiringProgress from "@/features/dashboard-analytics/components/ActiveHiringProgress";
import DepartmentVolumeCard from "@/features/dashboard-analytics/components/DepartmentVolumeCard";
import useHistoricalDashboard from "@/features/dashboard-analytics/hooks/useHistoricalDashboard";
import JobsOverviewSkeleton from "@/features/dashboard-analytics/components/JobsOverviewSkeleton";

const JobsOverviewDashboard = () => {
  const { isLoading, isError, data } = useHistoricalDashboard();
  console.log(data);
  return isLoading ? (
    <JobsOverviewSkeleton />
  ) : isError ? (
    <div className="ml-3 mr-3 md:mr-0 my-3 flex flex-col gap-6">
      <p className="text-center text-cyan-950 font-semibold">
        Error occurred while fetching dashboard data.
      </p>
    </div>
  ) : (
    <div className="ml-3 mr-3 md:mr-0 my-3 flex flex-col gap-6">
      <DashboardStats data={data.headers} />
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-2 h-full">
          <ApplicantInflowCard />
        </div>

        <div className="flex-1 h-full">
          <RecruitmentFunnelCard data={data.recruitement_funnel}/>
        </div>
      </div>
      <DepartmentVolumeCard />
      <ActiveHiringProgress />
    </div>
  );
};

export default JobsOverviewDashboard;
