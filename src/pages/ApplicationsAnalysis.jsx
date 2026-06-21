import CandidateSummary from "@/features/dashboard-analytics/components/CandidateSummary";
import CandidateTable from "@/features/dashboard-analytics/components/CandidateTable";
import ApplicationsStats from "@/features/dashboard-analytics/components/ApplicationsStats";
import Toolbar from "@/features/dashboard-analytics/components/Toolbar";
import React, { useState } from "react";
import { useApplicationsDashboard } from "@/features/dashboard-analytics/hooks/useApplicationsDashboard";

const ApplicationsAnalysis = () => {
  const jobId = "6a0b78de036bd27e11fe2458";
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState();
  const [matchScore, setMatchScore] = useState();

  const { data, isLoading, error, refetch } = useApplicationsDashboard({
    jobId,
    page,
    limit: 10,
    applicationStatus: status,
    matchScore: matchScore,
  });

  return (
    <div className="flex flex-col gap-8 p-8">
      <ApplicationsStats
        totalApplications={data?.totalApplications}
        applicationsToday={data?.applicationsToday}
        shortlistedCandidates={data?.shortlistedCandidates}
        averageMatchScore={data?.averageMatchScore}
        isLoading={isLoading}
        error={error}
      />
      {!isLoading && (
        <Toolbar
          status={status}
          setStatus={setStatus}
          matchScore={matchScore}
          setMatchScore={setMatchScore}
        />
      )}
      <CandidateTable
        dashboardData={data?.dashboardData}
        pagination={data?.pagination}
        isLoading={isLoading}
        error={error}
        page={page}
        setPage={setPage}
        refetch={refetch}
      />
      <CandidateSummary jobId={jobId} />
    </div>
  );
};

export default ApplicationsAnalysis;
