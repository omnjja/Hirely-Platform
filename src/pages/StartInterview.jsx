import ErrorComponent from "@/components/ui/ErrorComponent";
import InterviewInstructions from "@/features/video-interview/components/InterviewInstructions";
import InterviewInstructionsSkeleton from "@/features/video-interview/components/InterviewInstructionsSkeleton";
import useInstructions from "@/features/video-interview/hooks/useInstructions";
import useInterviewSession from "@/features/video-interview/hooks/useInterviewSession";
import useAppNavigate from "@/hooks/useAppNavigate";
import React from "react";

const StartInterview = () => {
  let applicationId = "6a45875abad3dcbdc175c4e4";
  const { data, isLoading, error, refetch } = useInstructions();
  const { data: interviewSession } = useInterviewSession(applicationId);
  const { toInterviewSession } = useAppNavigate();
  if (isLoading) return <InterviewInstructionsSkeleton />;
  if (error) return <ErrorComponent error={error} action={refetch} />;
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <InterviewInstructions
        title={data?.title}
        instructions={data?.instructions}
        onStart={() => toInterviewSession()}
      />
    </div>
  );
};

export default StartInterview;
