import ErrorComponent from "@/components/ui/ErrorComponent";
import InterviewInstructions from "@/features/video-interview/components/InterviewInstructions";
import InterviewInstructionsSkeleton from "@/features/video-interview/components/InterviewInstructionsSkeleton";
import useInstructions from "@/features/video-interview/hooks/useInstructions";
import useInterviewSession from "@/features/video-interview/hooks/useInterviewSession";
import useStartVideoInterview from "@/features/video-interview/hooks/useStartVideoInterview";
import useAppNavigate from "@/hooks/useAppNavigate";
import { useParams } from "react-router-dom";
import React from "react";
import toast from "react-hot-toast";

const StartInterview = () => {
  const { applicationId } = useParams();
  const { data, isLoading, error, refetch } = useInstructions();
  const { data: interviewSession } = useInterviewSession(applicationId);
  const { mutateAsync: startInterviewSession } =
    useStartVideoInterview(applicationId);
  const { toInterviewSession, toSubmitInterview } = useAppNavigate();

  async function handleStartInterview() {
    if (interviewSession?.status === "SUBMITTED") {
      toast("You have already finished this interview");
    } else if (interviewSession?.canSubmit) {
      toSubmitInterview(interviewSession?.interviewId);
    } else if (
      interviewSession?.canStart ||
      interviewSession?.status === "STARTED"
    ) {
      const response = await startInterviewSession();
      toInterviewSession(response.interviewId);
    } else {
      toast.error("You cannot start the interview at this time.");
    }
  }

  if (isLoading) return <InterviewInstructionsSkeleton />;
  if (error) return <ErrorComponent error={error} action={refetch} />;
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <InterviewInstructions
        title={data?.title}
        instructions={data?.instructions}
        onStart={handleStartInterview}
      />
    </div>
  );
};

export default StartInterview;
