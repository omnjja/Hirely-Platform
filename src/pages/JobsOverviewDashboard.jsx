import React, { useState } from "react";
import DashboardStats from "@/features/dashboard-analytics/components/DashboardStats";
import ApplicantInflowCard from "@/features/dashboard-analytics/components/ApplicantInflowCard";
import RecruitmentFunnelCard from "@/features/dashboard-analytics/components/RecruitmentFunnelCard";
import ActiveHiringProgress from "@/features/dashboard-analytics/components/ActiveHiringProgress";
import DepartmentVolumeCard from "@/features/dashboard-analytics/components/DepartmentVolumeCard";
import useHistoricalDashboard from "@/features/dashboard-analytics/hooks/useHistoricalDashboard";
import JobsOverviewSkeleton from "@/features/dashboard-analytics/components/JobsOverviewSkeleton";
import ErrorComponent from "@/components/ui/ErrorComponent";
import NoJobsFound from "@/features/dashboard-analytics/components/NoJobsFound";

const JobsOverviewDashboard = () => {
  const [deptPage, setDeptPage] = useState(1);
  const { isLoading, error, refetch, isFetching, data } =
    useHistoricalDashboard({
      deptPage,
    });
  const isNoJobs =
    error?.response?.status === 404 &&
    error?.response?.data?.message === "Did not Find any jobs for this user";
  if (isLoading) return <JobsOverviewSkeleton />;
  if (isNoJobs) return <NoJobsFound />;
  if (error) return <ErrorComponent error={error} action={() => refetch()} />;
  if (!data) {
    return <JobsOverviewSkeleton />;
  }
  return (
    <div className="ml-3 mr-3 md:mr-0 my-3 flex flex-col gap-6">
      <DashboardStats data={data?.headers} />
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-2 h-full">
          <ApplicantInflowCard data={data?.inflow_trend} />
        </div>

        <div className="flex-1 h-full">
          <RecruitmentFunnelCard data={data?.recruitement_funnel} />
        </div>
      </div>
      <DepartmentVolumeCard
        data={data?.volume_by_department}
        onPageChange={setDeptPage}
        isFetching={isFetching}
      />
      <ActiveHiringProgress />
    </div>
  );
};

export default JobsOverviewDashboard;
