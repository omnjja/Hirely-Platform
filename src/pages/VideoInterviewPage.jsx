import React from "react";
import CompletedInterview from "@/features/video-interview/components/CompletedInterview";
import QuestionsProgressBar from "@/features/video-interview/components/QuestionsProgressBar";
import InterviewRecorder from "@/features/video-interview/components/InterviewRecorder";
import VideoInfo from "@/features/video-interview/components/VideoInfo";
import VideoActions from "@/features/video-interview/components/VideoActions";
import { formatTime } from "@/utils/formatTime";
import { useInterviewFlow } from "@/features/video-interview/hooks/useInterviewFlow";
import { PHASES } from "@/constants/videoInterview";


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

const VideoInterviewPage = () => {


  const { interview, media, timers, actions } = useInterviewFlow({
    questions,
    preparationTime: PREPARATION_TIME,
    totalDuration: TOTAL_DURATION,
    retakes: RETAKES,
  });

  if (media.cameraError) {
    return (
      <div className="mx-auto max-w-7xl px-3 py-10 text-center text-sm text-red-600">
        Couldn't access your camera/microphone. Please grant permission and
        reload the page.
      </div>
    );
  }

  if (interview.phase === PHASES.SUBMITTED) {
    return <CompletedInterview />;
  }

  return (
    <div className="mx-auto min-h-screen w-full max-w-7xl px-3 py-4 sm:px-5 md:px-8 lg:w-[80%] lg:px-0 lg:py-2">
      <div className="flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <QuestionsProgressBar questions={questions} step={interview.step} />

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
          totalDuration={TOTAL_DURATION}
          retakesLeft={interview.retakesLeft}
        />

        <p className="text-center text-sm text-[#595c5e]">
          Max duration{" "}
          <span className="font-semibold">{formatTime(TOTAL_DURATION)}</span>
        </p>

        <VideoActions
          phase={interview.phase}
          retakesLeft={interview.retakesLeft}
          stopRecording={actions.stopRecording}
          onRetake={actions.retake}
          onSubmit={actions.submit}
        />
      </div>
    </div>
  );
};

export default VideoInterviewPage;
