import { Circle, RotateCcw, Timer } from "lucide-react";
import React from "react";

const VideoInfo = ({ isRecording, setElapsed, elapsed, TOTAL_DURATION }) => {
  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;

    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <div className="">
      {/* Mobile */}
      <div className="flex flex-col gap-4 md:hidden">
        {/* Top row */}
        <div className="flex items-center justify-between">
          {/* Recording */}
          <div
            className={`${
              isRecording ? "visible" : "invisible"
            } flex items-center gap-2 rounded-full border border-black bg-[#A30000CC] px-3 py-2 shadow-sm backdrop-blur-sm`}
          >
            <div className="relative">
              <Circle size={10} className="fill-white text-white" />
              <Circle
                size={10}
                className="absolute inset-0 animate-ping fill-white text-white opacity-50"
              />
            </div>

            <span className="text-[10px] font-semibold uppercase tracking-wider text-white">
              Recording
            </span>
          </div>

          {/* AI */}
          <div className="flex items-center gap-1.5 rounded-full border border-black bg-white/90 px-2.5 py-1 shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            <span className="text-xs font-semibold text-gray-700">
              AI Ready
            </span>
          </div>
        </div>

        {/* Timer */}
        <div className="flex justify-center">
          <div className="flex items-center gap-1 rounded-full bg-[#EEF1F3] px-4 py-2 shadow-sm">
            <Timer color="#0576D6" size={18} />

            <span className="font-[Plus Jakarta Sans] text-sm font-bold tracking-wider text-[#0576D6]">
              {formatTime(elapsed)}
            </span>

            <span className="text-[10px] font-semibold text-[#595C5E99]">
              / {formatTime(TOTAL_DURATION)}
            </span>
          </div>
        </div>

        {/* Retake */}
        <div className="flex justify-center">
          <button
            onClick={() => setElapsed(1)}
            className="flex items-center gap-1 text-[#595C5E]"
          >
            <RotateCcw size={16} />

            <span className="text-sm font-semibold">Retake</span>
          </button>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex md:items-center">
        {/* Recording */}
        <div className="flex flex-1 justify-center">
          <div
            className={`${
              isRecording ? "visible" : "invisible"
            } flex items-center gap-2 rounded-full border border-black bg-[#A30000CC] px-4 py-2 shadow-sm backdrop-blur-sm`}
          >
            <div className="relative">
              <Circle size={10} className="fill-white text-white" />
              <Circle
                size={10}
                className="absolute inset-0 animate-ping fill-white text-white opacity-50"
              />
            </div>

            <span className="text-[10px] font-semibold uppercase tracking-wider text-white">
              Recording
            </span>
          </div>
        </div>

        {/* Retake */}
        <div className="flex flex-1 justify-center">
          <button
            onClick={() => setElapsed(1)}
            className="flex items-center gap-1 text-[#595C5E]"
          >
            <RotateCcw size={16} />
            <span className="text-sm font-semibold">Retake</span>
          </button>
        </div>

        {/* Timer */}
        <div className="flex flex-[1.5] justify-start">
          <div className="flex items-center gap-1 rounded-full bg-[#EEF1F3] px-4 py-2 shadow-sm">
            <Timer color="#0576D6" size={20} />

            <span className="font-[Plus Jakarta Sans] text-base font-bold tracking-wider text-[#0576D6]">
              {formatTime(elapsed)}
            </span>

            <span className="text-[10px] font-semibold text-[#595C5E99]">
              / {formatTime(TOTAL_DURATION)}
            </span>
          </div>
        </div>

        {/* AI */}
        <div className="flex flex-1 justify-center">
          <div className="flex items-center gap-1.5 rounded-full border border-black bg-white/90 px-2.5 py-1 shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-green-400" />

            <span className="text-xs font-semibold text-gray-700">
              AI Ready
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
