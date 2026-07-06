import CandidateSummary from "@/features/dashboard-analytics/components/CandidateSummary";
import CandidateTable from "@/features/dashboard-analytics/components/CandidateTable";
import ApplicationsStats from "@/features/dashboard-analytics/components/ApplicationsStats";
import Toolbar from "@/features/dashboard-analytics/components/Toolbar";
import React from "react";
import { useApplicationsDashboard } from "@/features/dashboard-analytics/hooks/useApplicationsDashboard";
import { useAnalysisFilterationStore } from "../features/dashboard-analytics/store/AnalysisFilterationStore";
import { useCandidateAppSummaryStore } from "@/features/dashboard-analytics/store/applicationSummaryStore";
import { useParams } from "react-router-dom";

const ApplicationsAnalysis = () => {
  const { jobId } = useParams();
  const { page, limit, status, matchScore } = useAnalysisFilterationStore();
  const viewingSummaryId = useCandidateAppSummaryStore(
    (state) => state.viewingSummaryId,
  );

  const onViewSummary = viewingSummaryId !== undefined;
  const { data, isLoading, isFetching, error, refetch } = useApplicationsDashboard({
    jobId,
    page,
    limit: limit,
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
      {!isLoading && <Toolbar jobId={data?.jobId} />}
      <CandidateTable
        dashboardData={data?.dashboardData}
        pagination={data?.pagination}
        totalApplications={data?.pagination?.total}
        isLoading={isLoading}
        isFetching={isFetching}
        error={error}
        refetch={refetch}
      />
      {onViewSummary && (
        <CandidateSummary applicationId={"dkhdk"} jobId={data?.jobId} />
      )}
    </div>
  );
};

export default ApplicationsAnalysis;
