import BehavioralAnalysis from "@/features/hr-view-candidate/components/BehavioralAnalysis";
import CandidateMatch from "@/features/hr-view-candidate/components/CandidateMatch";
import CandidateSummary from "@/features/hr-view-candidate/components/CandidateSummary";
import CvPreviewCard from "@/features/hr-view-candidate/components/CvPreviewCard";
import InterviewSummary from "@/features/hr-view-candidate/components/InterviewSummary";
import RecruiterNotes from "@/features/hr-view-candidate/components/RecruiterNotes";
import useApplicationData from "@/features/hr-view-candidate/hooks/useApplicationData";
import React from "react";
import ViewCandidateSkeleton from "@/features/hr-view-candidate/components/ViewCandidateSkeleton";

const APPLICATION_ID = "6a4557febad3dcbdc175c215"; // this will change

const ViewCandidate = () => {
  const {
    data: applicationData,
    isLoading,
    isError,
  } = useApplicationData({ applicationId: APPLICATION_ID }); // this will change
  console.log(applicationData);

  if (isLoading) {
    return <ViewCandidateSkeleton />;
  }
  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg font-semibold">
          Error loading application data. Please try again later.
        </p>
      </div>
    );
  }
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <BehavioralAnalysis />
          <div className="flex flex-row md:flex-col gap-4">
            <div className="flex-1">
              <InterviewSummary data={applicationData.VideoAnalysisSection} />
            </div>
            <div className="flex-1">
              <RecruiterNotes
                data={applicationData.RecruiterNotesSection}
                applicationId={APPLICATION_ID}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCandidate;
