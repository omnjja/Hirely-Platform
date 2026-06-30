import React, { useCallback, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";

import CompletedInterview from "@/features/video-interview/components/CompletedInterview";
import QuestionsProgressBar from "@/features/video-interview/components/QuestionsProgressBar";
import InterviewRecorder from "@/features/video-interview/components/InterviewRecorder";
import VideoInfo from "@/features/video-interview/components/VideoInfo";
import VideoActions from "@/features/video-interview/components/VideoActions";

import { formatTime } from "@/utils/formatTime";

const questions = [
  "Tell us about a time you solved a complex problem.",
  "Describe your greatest professional achievement.",
  "How do you handle working under pressure?",
  "Tell us about a time you led a team.",
  "Where do you see yourself in five years?",
  "Why are you interested in this role?",
];

const TOTAL_DURATION = 60;
const PREPARATION_TIME = 5;
const RETAKES = 2;

const INTERVIEW_PHASE = {
  PREPARING: "preparing",
  RECORDING: "recording",
  REVIEW: "review",
  SUBMITTED: "submitted",
};

const VideoInterviewPage = () => {
  const [step, setStep] = useState(1);
  const [phase, setPhase] = useState(INTERVIEW_PHASE.PREPARING);

  const onStop = useCallback(() => {
    setPhase(INTERVIEW_PHASE.REVIEW);
  }, []);

  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
    previewStream,
    clearBlobUrl,
  } = useReactMediaRecorder({
    startPreviewOnMount: true,
    video: true,
    mediaRecorderOptions: {
      mimeType: "video/webm;codecs=vp8,opus",
    },
    onStop,
  });

  const handleCountdownFinished = useCallback(() => {
    startRecording();
    setPhase(INTERVIEW_PHASE.RECORDING);
  }, [startRecording]);

  const handleStopRecording = useCallback(() => {
    stopRecording();
  }, [stopRecording]);

  const handleRetake = useCallback(() => {
    clearBlobUrl();

    setPhase(INTERVIEW_PHASE.PREPARING);
  }, [clearBlobUrl]);

  const handleSubmit = () => {
    console.log("submit");

    if (step === questions.length) {
      setPhase(INTERVIEW_PHASE.SUBMITTED);
      return;
    }

    clearBlobUrl();

    setStep((s) => s + 1);
    setPhase(INTERVIEW_PHASE.PREPARING);
  };

  if (phase === INTERVIEW_PHASE.SUBMITTED) {
    return <CompletedInterview />;
  }

  return (
    <div className="mx-auto min-h-screen w-full max-w-7xl px-3 py-4 sm:px-5 md:px-8 lg:w-[80%] lg:px-0 lg:py-2">
      <div className="flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <QuestionsProgressBar questions={questions} step={step} />

        <InterviewRecorder
          step={step}
          phase={phase}
          preparationTime={PREPARATION_TIME}
          onCountdownFinished={handleCountdownFinished}
          previewStream={previewStream}
          mediaBlobUrl={mediaBlobUrl}
        />

        <VideoInfo
          phase={phase}
          totalDuration={TOTAL_DURATION}
          onRetake={handleRetake}
        />

        <p className="text-center text-sm text-[#595c5e]">
          Max duration{" "}
          <span className="font-semibold">{formatTime(TOTAL_DURATION)}</span> ·{" "}
          <span className="font-semibold">{RETAKES}</span> retakes available
        </p>

        <VideoActions
          phase={phase}
          stopRecording={handleStopRecording}
          onRetake={handleRetake}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default VideoInterviewPage;
