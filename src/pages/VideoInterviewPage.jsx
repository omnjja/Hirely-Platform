import React, { useEffect, useMemo } from "react";
import QuestionsProgressBar from "@/features/video-interview/components/QuestionsProgressBar";
import InterviewRecorder from "@/features/video-interview/components/InterviewRecorder";
import VideoInfo from "@/features/video-interview/components/VideoInfo";
import VideoActions from "@/features/video-interview/components/VideoActions";
import { formatTime } from "@/utils/formatTime";
import { useInterviewFlow } from "@/features/video-interview/hooks/useInterviewFlow";
import { PHASES } from "@/constants/videoInterview";
import useInterviewSession from "@/features/video-interview/hooks/useInterviewSession";
import useCreateVidURL from "@/features/video-interview/hooks/useCreateVidURL";
import toast from "react-hot-toast";
import useSaveVideoAnswer from "@/features/video-interview/hooks/useSaveVideoAnswer";
import useAppNavigate from "@/hooks/useAppNavigate";
import { useParams } from "react-router-dom";

const VideoInterviewPage = () => {
  const { applicationId, interviewId } = useParams();

  const { toSubmitInterview } = useAppNavigate();
  const { data: interviewSession, isLoading } =
    useInterviewSession(applicationId);

  useEffect(() => {
    if (
      interviewSession?.answeredCount ===
        interviewSession?.questions?.length - 1 &&
      interviewId
    ) {
      toSubmitInterview(interviewId);
    }
  }, [
    interviewSession?.answeredCount,
    interviewSession?.questions?.length,
    interviewId,
  ]);

  const { mutateAsync: createVideoURL } = useCreateVidURL();
  const { mutateAsync: submitAnswer, isPending } = useSaveVideoAnswer();

  const sortedQuestions = useMemo(() => {
    return [...(interviewSession?.questions ?? [])].sort(
      (a, b) => a.order - b.order,
    );
  }, [interviewSession?.questions]);

  const startStep = useMemo(() => {
    if (interviewSession?.answeredCount > 0) {
      const idx = sortedQuestions.findIndex(
        (q) => q.type !== "practice" && !q.isAnswered,
      );
      return idx === -1 ? sortedQuestions.length : idx;
    } else {
      return 0;
    }
  }, [sortedQuestions, interviewSession?.answeredCount]);

  const { interview, media, timers, actions } = useInterviewFlow({
    currentStep: startStep,
    questions: sortedQuestions,
    interviewId: interviewId,
    createVideoURL,
    submitAnswer,
  });

  const handleSubmit = async () => {
    try {
      toast.loading("Submitting your answer...", { id: "submit" });
      await actions.submit();
    } catch (err) {
      console.error("errorr:", err);
      toast.error(
        interview.submitError || "Something went wrong. Please try again.",
        { id: "submit" },
      );
    } finally {
      toast.dismiss("submit");
    }
  };

  useEffect(() => {
    if (interview.phase === PHASES.SUBMITTED && interviewId) {
      toSubmitInterview(interviewId);
    }
  }, [interview.phase, interviewId, toSubmitInterview]);

  if (media.cameraError) {
    return (
      <div className="mx-auto max-w-7xl px-3 py-10 text-center text-sm text-red-600">
        Couldn't access your camera/microphone. Please grant permission and
        reload the page.
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="mx-auto max-w-7xl px-3 py-10 text-center text-sm text-gray-500">
        Loading interview session...
      </div>
    );
  }
  if (!interviewSession) {
    return (
      <div className="mx-auto max-w-7xl px-3 py-10 text-center text-sm text-gray-500">
        Interview session is not available
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-screen w-full max-w-7xl px-3 py-4 sm:px-5 md:px-8 lg:w-[80%] lg:px-0 lg:py-2">
      <div className="flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <QuestionsProgressBar
          questions={sortedQuestions}
          step={interview.step}
        />

        <InterviewRecorder
          phase={interview.phase}
          status={media.status}
          countdown={timers.countdown}
          previewStream={media.previewStream}
          mediaBlobUrl={media.mediaBlobUrl}
        />

        <VideoInfo
          phase={interview.phase}
          recordingElapsed={timers.recordingElapsed}
          totalDuration={interview?.currentQuestion?.answerDuration}
        />

        <div className="text-center text-sm text-[#595c5e]">
          <div>
            Minimum duration{" "}
            <span className="font-semibold">{formatTime(30)}</span>
          </div>
          <div>
            maximum duration{" "}
            <span className="font-semibold">
              {formatTime(interview?.currentQuestion?.answerDuration)}
            </span>
          </div>
        </div>

        <VideoActions
          phase={interview.phase}
          stopRecording={actions.stopRecording}
          isPending={isPending || interview.isPending}
          recordingElapsed={timers.recordingElapsed}
          skipCountdown={actions.skipCountdown}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default VideoInterviewPage;
