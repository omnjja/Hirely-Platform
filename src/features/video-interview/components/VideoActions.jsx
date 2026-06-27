import React, { useState } from "react";
import { ArrowRight, Circle, Mic, MicOff, Square } from "lucide-react";
import ButtonComponent from "@/components/ui/ButtonComponent";

const VideoActions = ({
  finished,
  isRecording,
  setIsRecording,
  handleStop,
  step,
  setStep,
  len,
}) => {
  const [micOn, setMicOn] = useState(true);

  return (
    <div className="flex flex-col gap-5 md:gap-0">
      {/* Recording controls */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Record / Stop */}
        <button
          disabled={finished}
          onClick={
            isRecording
              ? handleStop
              : () => {
                  setIsRecording(true);
                }
          }
          title={
            finished ? "" : isRecording ? "Stop recording" : "Start recording"
          }
          className={`flex h-10 w-10 items-center justify-center rounded-full border border-[#2C2F31] shadow-md transition-all active:scale-95 sm:h-14 sm:w-14 ${
            isRecording
              ? "bg-[#0576D6] hover:bg-[#0568bd]"
              : "bg-gray-200 hover:bg-gray-300"
          } ${finished ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
        >
          {isRecording ? (
            <Square size={16} fill="white" color="white" />
          ) : (
            <Circle size={16} fill="#fb2c36" color="#fb2c36" />
          )}
        </button>

        {/* Mic */}
        <button
          onClick={() => setMicOn((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2C2F31] bg-[#DFE3E6] transition-colors hover:bg-gray-300"
        >
          {micOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
        </button>
      </div>

      {/* Submit */}
      <div className="flex justify-stretch lg:justify-end">
        <div className="w-full lg:w-auto">
          <ButtonComponent
            onClick={() => {
              setStep((prev) => prev + 1);
            }}
            disabled={isRecording}
            style={{
              bgColor: "#0576D6",
            }}
            className="w-full shadow-sm lg:w-auto"
          >
            <div className="flex items-center justify-center gap-2">
              <p>{step < len ? "Submit answer" : "Finish interview"}</p>

              <ArrowRight className="h-4 w-4" />
            </div>
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default VideoActions;
