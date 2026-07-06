import HeaderCard from "@/features/video-analytics/components/HeaderCard";
import OverallPerformanceCard from "@/features/video-analytics/components/OverallPerformanceCard";
import CoreCompetenciesCard from "@/features/video-analytics/components/CoreCompetenciesCard";
import React from "react";
import InterviewResponses from "@/features/video-analytics/components/InterviewResponses";
import useVideoSummary from "@/features/video-analytics/hooks/useVideoSummary";
import { ClockAlert } from "lucide-react";

const APPLICATIONID = "6a0e1d15959770bcf42df73c";

const VideoInterviewAnalytics = () => {
  const { data, isLoading, isError, error } = useVideoSummary({
    applicationId: APPLICATIONID,
  });
  if (isLoading) return <div></div>;
  const isNotAnalysed = error?.response?.status === 400;

  if (isError && isNotAnalysed) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
          <ClockAlert size={22} className="text-[#0576D6]" />
        </div>
        <div>
          <p className="font-semibold text-gray-800">Analysis in Progress</p>
          <p className="text-sm text-gray-400 mt-1 max-w-xs">
            The interview hasn't been analysed yet. Check back shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <HeaderCard data={data.headerSection} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 items-start">
        <div className="flex flex-col gap-4">
          <OverallPerformanceCard data={data.performanceSection} />
          <CoreCompetenciesCard data={data.coreCompetenciesSection} />
        </div>
        <div className="md:col-span-2">
          <InterviewResponses data={data.InterviewResponsesSection} />
        </div>
      </div>
    </div>
  );
};

export default VideoInterviewAnalytics;
