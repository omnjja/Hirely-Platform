import HeaderCard from "@/features/video-analytics/components/HeaderCard";
import OverallPerformanceCard from "@/features/video-analytics/components/OverallPerformanceCard";
import CoreCompetenciesCard from "@/features/video-analytics/components/CoreCompetenciesCard";
import React from "react";
import InterviewResponses from "@/features/video-analytics/components/InterviewResponses";

const VideoInterviewAnalytics = () => {
  return (
    <div>
      <HeaderCard />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 items-start">
        <div className="flex flex-col gap-4">
          <OverallPerformanceCard />
          <CoreCompetenciesCard />
        </div>
        <div className="md:col-span-2">
          <InterviewResponses />
        </div>
      </div>
    </div>
  );
};

export default VideoInterviewAnalytics;
