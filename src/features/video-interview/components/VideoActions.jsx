import React, { memo, useState } from "react";
import { ArrowRight, Mic, MicOff, Square, RotateCcw } from "lucide-react";

import ButtonComponent from "@/components/ui/ButtonComponent";

const VideoActions = ({ phase, stopRecording, onRetake, onSubmit }) => {
  const [micOn, setMicOn] = useState(true);

  const isPreparing = phase === "preparing";
  const isRecording = phase === "recording";
  const isReview = phase === "review";

  return (
    <div className="flex flex-col gap-5 md:gap-0">
      {/* Controls */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Stop Recording */}
        {isRecording && (
          <button
            onClick={stopRecording}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0576D6] text-white shadow-md transition hover:bg-[#0568bd]"
          >
            <Square size={18} fill="white" />
          </button>
        )}

        {/* Retake */}
        {isReview && (
          <button
            onClick={onRetake}
            className="flex h-12 w-12 items-center justify-center rounded-full border bg-gray-100 transition hover:bg-gray-200"
          >
            <RotateCcw size={18} />
          </button>
        )}

        {/* Mic */}
        {(isPreparing || isRecording) && (
          <button
            onClick={() => setMicOn((prev) => !prev)}
            className="flex h-12 w-12 items-center justify-center rounded-full border bg-[#DFE3E6] transition hover:bg-gray-300"
          >
            {micOn ? (
              <Mic className="h-5 w-5" />
            ) : (
              <MicOff className="h-5 w-5" />
            )}
          </button>
        )}
      </div>

      {/* Submit */}
      <div className="flex justify-stretch lg:justify-end">
        <div className="w-full lg:w-auto">
          <ButtonComponent
            onClick={onSubmit}
            disabled={!isReview}
            style={{
              bgColor: "#0576D6",
            }}
            className="w-full shadow-sm lg:w-auto"
          >
            <div className="flex items-center justify-center gap-2">
              <p>Submit Answer</p>

              <ArrowRight className="h-4 w-4" />
            </div>
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default memo(VideoActions);
