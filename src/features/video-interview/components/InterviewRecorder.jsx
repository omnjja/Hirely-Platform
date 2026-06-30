import React, { memo, useEffect, useRef } from "react";
import CountdownOverlay from "./CountdownOverlay";

const InterviewRecorder = ({
  phase,
  status,
  countdown,
  previewStream,
  mediaBlobUrl,
}) => {
  const videoRef = useRef(null);
  const shouldShowPlayback =
    phase === "review" && status === "stopped" && Boolean(mediaBlobUrl);

  // decide what is gonna displayed, livestream or recorded video
  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    if (shouldShowPlayback) {
      videoElement.pause();
      videoElement.srcObject = null; // disable camera
      videoElement.src = mediaBlobUrl;
      videoElement.load();
      videoElement.play().catch(() => {});
      return;
    }

    videoElement.pause();
    videoElement.src = "";

    if (previewStream) {
      videoElement.srcObject = previewStream;
      videoElement.muted = true;
      videoElement.playsInline = true;
      videoElement.autoplay = true;
      videoElement.play().catch(() => {});
    } else {
      videoElement.srcObject = null;
    }
  }, [previewStream, shouldShowPlayback, mediaBlobUrl]);

  return (
    <div className="px-0 sm:px-2 md:px-4 lg:px-6">
      <div
        className="relative overflow-hidden rounded-xl bg-black"
        style={{ aspectRatio: "16 / 9" }}
      >
        <CountdownOverlay phase={phase} countdown={countdown} />

        <video
          ref={videoRef}
          className="h-full w-full rounded-xl object-cover"
          autoPlay
          muted={!shouldShowPlayback}
          playsInline
          controls={shouldShowPlayback}
          preload={shouldShowPlayback ? "metadata" : "auto"}
        />

        {!shouldShowPlayback && !previewStream && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/70 px-6 text-center text-sm text-white">
            Allow camera access to preview your interview feed.
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(InterviewRecorder);
