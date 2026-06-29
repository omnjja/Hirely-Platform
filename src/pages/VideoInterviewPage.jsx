import CompletedInterview from "@/features/video-interview/components/CompletedInterview";
import QuestionsProgressBar from "@/features/video-interview/components/QuestionsProgressBar";
import React, { useCallback, useState } from "react";
import VideoActions from "@/features/video-interview/components/VideoActions";
import VideoInfo from "@/features/video-interview/components/VideoInfo";
import InterviewRecorder from "@/features/video-interview/components/InterviewRecorder";
import { useReactMediaRecorder } from "react-media-recorder";
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
const RETAKES = 2;

const VideoInterviewPage = () => {
  const onStop = useCallback((blobUrl, blob) => {
    console.log("blob", blob);
    console.log("size", blob.size);
    console.log("type", blob.type);
    const file = new File([blob], "test.mp4", { type: blob.type });
    console.log(file);
  }, []); // ← stable reference

  const { status, startRecording, stopRecording, mediaBlobUrl, previewStream } =
    useReactMediaRecorder({
      video: true,
      mediaRecorderOptions: {
        mimeType: "video/webm;codecs=vp8,opus",
      },
      onStop, // ← pass stable callback
    });

  const recording = status === "recording";
  const submitted = false;
  const [step, setStep] = useState(1);

  if (submitted) return <CompletedInterview />;

  return (
    <div className="mx-auto min-h-screen w-full max-w-7xl px-3 py-4 sm:px-5 md:px-8 lg:w-[80%] lg:px-0 lg:py-2">
      <div className="flex w-full flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6 md:gap-6 md:p-8">
        {/* Header */}
        <QuestionsProgressBar questions={questions} step={step} />

        {/* Video */}
        <InterviewRecorder
          previewStream={previewStream}
          mediaBlobUrl={mediaBlobUrl}
        />

        {/* Video info */}
        <VideoInfo isRecording={recording} TOTAL_DURATION={TOTAL_DURATION} />

        {/* Helper text */}
        <p className="px-2 text-center text-xs text-[#595c5ed2] sm:text-sm">
          Max duration{" "}
          <span className="font-semibold">{formatTime(TOTAL_DURATION)}</span> ·{" "}
          <span className="font-semibold">
            {RETAKES ? RETAKES : "NO"} retakes
          </span>{" "}
          available
        </p>

        {/* Actions */}
        <VideoActions
          startRecording={startRecording}
          stopRecording={stopRecording}
          isRecording={recording}
          finished={false}
          step={step}
          setStep={setStep}
          len={questions.length}
        />
      </div>
    </div>
  );
};

export default VideoInterviewPage;
