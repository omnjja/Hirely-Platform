import { useState } from "react";
import ApplicationHeader from "@/features/application-tracker/components/ApplicationHeader";
import MatchCard from "@/features/application-tracker/components/MatchCard";
import SummaryCard from "@/features/application-tracker/components/SummaryCard";
import React from "react";
import { SendHorizontal, Calendar } from "lucide-react";
import ApplicationStatus from "@/features/application-tracker/components/ApplicationStatus";
import JobList from "@/features/application-tracker/components/JobList";
import useApplicationStats from "@/features/application-tracker/hooks/useApplicationStats";
import useApplicationDetails from "@/features/application-tracker/hooks/useApplicationDetails";
import ApplicationDetail from "@/features/application-tracker/components/ApplicationDetail";
import ApplicationDetailSkeleton from "@/features/application-tracker/components/ApplicationDetailSkeleton";
import ErrorComponent from "@/components/ui/ErrorComponent";
import useApplicationData from "@/features/application-tracker/hooks/useApplicationData";

const ApplicationTracker = () => {
  const [page, setPage] = useState(1);
  const [state, setState] = useState("ALL");
  const [selectedId, setSelectedId] = useState(null);
  const { data: statusData, isLoading: statusLoading } = useApplicationStats();

  const { data: detailData, isLoading: detailLoading } =
    useApplicationDetails(selectedId);

  const {
    data: applicationData,
    isLoading,
    error,
    isError,
    refetch,
  } = useApplicationData({ page, state });

  if (selectedId) {
    if (detailLoading) {
      return <ApplicationDetailSkeleton />;
    }
    return (
      <ApplicationDetail data={detailData} onBack={() => setSelectedId(null)} />
    );
  }
  if (isError) {
    return <ErrorComponent error={error} action={() => refetch()} />;
  }

  return (
    <div>
      <ApplicationHeader data={statusData} isLoading={statusLoading} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <MatchCard data={statusData} isLoading={statusLoading} />
        <div className="grid grid-cols-2 gap-6">
          <SummaryCard
            icon={<SendHorizontal color="#0576D6" />}
            sum={statusData ? statusData.totalApplied : "0"}
            description="Total Applied"
          />
          <SummaryCard
            icon={<Calendar color="#0576D6" />}
            sum={statusData ? statusData.upcomingInterviews : "0"}
            description="Upcoming Interviews"
          />
        </div>
      </div>
      <ApplicationStatus setPage={setPage} state={state} setState={setState} />
      <JobList
        applicationData={applicationData}
        isLoading={isLoading}
        error={error}
        setPage={setPage}
        page={page}
        onSelectApplication={setSelectedId}
      />
    </div>
  );
};

export default ApplicationTracker;
