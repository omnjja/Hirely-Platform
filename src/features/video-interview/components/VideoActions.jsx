import React, { memo } from "react";
import { ArrowRight, Mic, MicOff, Square, RotateCcw } from "lucide-react";
import ButtonComponent from "@/components/ui/ButtonComponent";

const VideoActions = ({
  phase,
  retakesLeft,
  stopRecording,
  onRetake,
  onSubmit,
  isPending,
}) => {
  const isRecording = phase === "recording";
  const isReview = phase === "review";
  const canRetake = isReview && retakesLeft > 0;

  return (
    <div className="flex flex-col gap-5 md:gap-0">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {isRecording && (
          <button
            onClick={stopRecording}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0576D6] text-white shadow-md transition hover:bg-[#0568bd]"
          >
            <Square size={18} fill="white" />
          </button>
        )}

        {canRetake && (
          <button
            onClick={onRetake}
            className="flex h-12 w-12 items-center justify-center rounded-full border bg-gray-100 transition hover:bg-gray-200 cursor-pointer"
          >
            <RotateCcw size={18} />
          </button>
        )}
      </div>

      <div className="flex justify-stretch lg:justify-end mt-2 lg:mt-0">
        <div className="w-full lg:w-auto">
          <ButtonComponent
            onClick={onSubmit}
            disabled={!isReview || isPending}
            style={{ bgColor: "#0576D6" }}
            className="w-full shadow-sm lg:w-auto"
          >
            <div className="flex items-center justify-center gap-2">
              <p> Submit Answer</p>
              <ArrowRight className="h-4 w-4" />
            </div>
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default memo(VideoActions);
