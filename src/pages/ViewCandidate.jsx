import BehavioralAnalysis from "@/features/hr-view-candidate/components/BehavioralAnalysis";
import CandidateMatch from "@/features/hr-view-candidate/components/CandidateMatch";
import CandidateSummary from "@/features/hr-view-candidate/components/CandidateSummary";
import CvPreviewCard from "@/features/hr-view-candidate/components/CvPreviewCard";
import InterviewSummary from "@/features/hr-view-candidate/components/InterviewSummary";
import RecruiterNotes from "@/features/hr-view-candidate/components/RecruiterNotes";
import React from "react";

const ViewCandidate = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 m-5">
      <div className="md:flex-1 flex flex-row md:flex-col gap-3">
        <div className="flex-1  ">
          <CandidateSummary />
        </div>
        <div className="flex-1">
          <CvPreviewCard />
        </div>
      </div>

      <div className="md:flex-4">
        <CandidateMatch />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <BehavioralAnalysis />
          <div className="flex flex-row md:flex-col gap-4">
            <div className="flex-1">
              <InterviewSummary />
            </div>
            <div className="flex-1">
              <RecruiterNotes />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCandidate;
