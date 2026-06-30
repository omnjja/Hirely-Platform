import React, { memo, useEffect, useRef } from "react";
import CountdownOverlay from "./CountdownOverlay";

const InterviewRecorder = ({
  step,
  phase,
  preparationTime,
  onCountdownFinished,
  previewStream,
  mediaBlobUrl,
}) => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (previewStream && videoRef.current) {
      if (videoRef.current.srcObject !== previewStream) {
        videoRef.current.srcObject = previewStream;
      }
    }
  }, [previewStream]);

  return (
    <div className="px-0 sm:px-2 md:px-4 lg:px-6">
      <div
        className="relative overflow-hidden rounded-xl"
        style={{ aspectRatio: "16 / 9" }}
      >
        <CountdownOverlay
          interviewId={step}
          phase={phase}
          preparationTime={preparationTime}
          onCountdownFinished={onCountdownFinished}
        />

        {mediaBlobUrl ? (
          <video
            className="h-full w-full rounded-xl object-cover"
            key={mediaBlobUrl}
            src={mediaBlobUrl}
            controls
            playsInline
            preload="metadata"
          />
        ) : (
          <video
            ref={videoRef}
            className="h-full w-full rounded-xl object-cover"
            autoPlay
            muted
            playsInline
          />
        )}
      </div>
    </div>
  );
};

export default memo(InterviewRecorder);
