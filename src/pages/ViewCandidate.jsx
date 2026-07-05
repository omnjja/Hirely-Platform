import React, { useState } from "react";
import BehavioralAnalysis from "@/features/hr-view-candidate/components/BehavioralAnalysis";
import CandidateMatch from "@/features/hr-view-candidate/components/CandidateMatch";
import CandidateSummary from "@/features/hr-view-candidate/components/CandidateSummary";
import CvPreviewCard from "@/features/hr-view-candidate/components/CvPreviewCard";
import InterviewSummary from "@/features/hr-view-candidate/components/InterviewSummary";
import RecruiterNotes from "@/features/hr-view-candidate/components/RecruiterNotes";
import useApplicationData from "@/features/hr-view-candidate/hooks/useApplicationData";
import ViewCandidateSkeleton from "@/features/hr-view-candidate/components/ViewCandidateSkeleton";
import ErrorComponent from "@/components/ui/ErrorComponent";

// const APPLICATION_ID = "6a4557febad3dcbdc175c215"; // this will change
const APPLICATION_ID = "6a491971477dd71a18367921";

const ViewCandidate = () => {
  const {
    data: applicationData,
    isLoading,
    isError,
    error,
    refetch,
  } = useApplicationData({ applicationId: APPLICATION_ID });
  const [current, setCurrent] = useState(0);
  if (isLoading) {
    return <ViewCandidateSkeleton />;
  }
  if (isError) {
    return <ErrorComponent error={error} action={refetch} />;
  }
  const hasVideoAnalysis =
    applicationData?.VideoAnalysisSection &&
    applicationData.VideoAnalysisSection.length > 0;

  return (
    <div className="flex flex-col md:flex-row gap-4 m-5">
      <div className="md:flex-1 flex flex-row md:flex-col gap-3">
        <div className="flex-1  ">
          <CandidateSummary
            data={applicationData.ProfileSection}
            applicationId={APPLICATION_ID}
          />
        </div>
        <div className="flex-1">
          <CvPreviewCard data={applicationData.CVSection} />
        </div>
      </div>

      <div className="md:flex-4">
        <CandidateMatch data={applicationData.ArchitecturalAlignmentSection} />
        <div
          className={`grid gap-4 mt-4 ${
            hasVideoAnalysis ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
          }`}
        >
          {hasVideoAnalysis && (
            <BehavioralAnalysis
              data={applicationData.VideoAnalysisSection}
              current={current}
              setCurrent={setCurrent}
            />
          )}

          <div className="flex flex-col gap-4">
            {hasVideoAnalysis && (
              <InterviewSummary
                data={applicationData.VideoAnalysisSection}
                current={current}
              />
            )}

            <RecruiterNotes
              data={applicationData.RecruiterNotesSection}
              applicationId={APPLICATION_ID}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCandidate;
