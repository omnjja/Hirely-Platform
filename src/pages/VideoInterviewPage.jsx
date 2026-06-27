import CompletedInterview from "@/features/video-interview/components/CompletedInterview";
import QuestionsProgressBar from "@/features/video-interview/components/QuestionsProgressBar";
import React, { useEffect, useRef, useState } from "react";
import VideoActions from "@/features/video-interview/components/VideoActions";
import VideoInfo from "@/features/video-interview/components/VideoInfo";

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
  const [step, setStep] = useState(1);
  const [isRecording, setIsRecording] = useState(true);
  const [elapsed, setElapsed] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const intervalRef = useRef(null);

  const finished = elapsed === TOTAL_DURATION;

  useEffect(() => {
    if (isRecording && elapsed < TOTAL_DURATION) {
      intervalRef.current = setInterval(() => {
        setElapsed((prev) => {
          if (prev >= TOTAL_DURATION) {
            clearInterval(intervalRef.current);
            setIsRecording(false);
            return TOTAL_DURATION;
          }

          return prev + 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRecording]);

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;

    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    setIsRecording(false);
  };

  if (submitted) return <CompletedInterview />;

  return (
    <div className="mx-auto min-h-screen w-full max-w-7xl px-3 py-4 sm:px-5 md:px-8 lg:w-[80%] lg:px-0 lg:py-8">
      <div className="flex w-full flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6 md:gap-6 md:p-8">
        {/* Header */}
        <QuestionsProgressBar questions={questions} step={step} />

        {/* Video */}
        <div className="px-0 sm:px-2 md:px-4 lg:px-6">
          <div
            className="relative overflow-hidden rounded-xl bg-gray-100"
            style={{ aspectRatio: "16 / 9" }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200" />
          </div>
        </div>

        {/* Video info */}
        <VideoInfo
          isRecording={isRecording}
          setElapsed={setElapsed}
          elapsed={elapsed}
          TOTAL_DURATION={TOTAL_DURATION}
        />

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
          isRecording={isRecording}
          finished={finished}
          setIsRecording={setIsRecording}
          handleStop={handleStop}
          step={step}
          setStep={setStep}
          len={questions.length}
        />
      </div>
    </div>
  );
};

export default VideoInterviewPage;
