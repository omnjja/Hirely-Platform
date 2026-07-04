import React, { memo } from "react";
import { Circle, RotateCcw } from "lucide-react";
import RecordingTimer from "./RecordingTimer";

const VideoInfo = ({ phase, recordingElapsed, totalDuration }) => {
  const isRecording = phase === "recording";

  return (
    <>
      {/* Mobile */}
      <div className="flex flex-col gap-4 md:hidden">
        <div className="flex items-center justify-between">
          <div
            className={`${isRecording ? "visible" : "invisible"} flex items-center gap-2 rounded-full border border-black bg-[#A30000CC] px-3 py-2`}
          >
            <div className="relative">
              <Circle size={10} className="fill-white text-white" />
              <Circle
                size={10}
                className="absolute inset-0 animate-ping fill-white text-white"
              />
            </div>
            <span className="text-[10px] font-semibold uppercase text-white">
              Recording
            </span>
          </div>

          <div className="flex items-center gap-1.5 rounded-full border border-black bg-white px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-xs font-semibold">AI Ready</span>
          </div>
        </div>

        <div className="flex justify-center">
          <RecordingTimer
            elapsed={recordingElapsed}
            totalDuration={totalDuration}
          />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden items-center md:flex">
        <div className="flex flex-1 justify-center">
          <div
            className={`${isRecording ? "visible" : "invisible"} flex items-center gap-2 rounded-full border border-black bg-[#A30000CC] px-4 py-2`}
          >
            <div className="relative">
              <Circle size={10} className="fill-white text-white" />
              <Circle
                size={10}
                className="absolute inset-0 animate-ping fill-white text-white"
              />
            </div>
            <span className="text-[10px] font-semibold uppercase text-white">
              Recording
            </span>
          </div>
        </div>

        <div className="flex flex-[1.5] justify-center">
          <RecordingTimer
            elapsed={recordingElapsed}
            totalDuration={totalDuration}
          />
        </div>

        <div className="flex flex-1 justify-center">
          <div className="flex items-center gap-1.5 rounded-full border border-black bg-white px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-xs font-semibold">AI Ready</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(VideoInfo);
