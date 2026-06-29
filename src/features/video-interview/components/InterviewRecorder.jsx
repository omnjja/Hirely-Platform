import React, { useEffect, useRef } from "react";

const InterviewRecorder = ({ previewStream, mediaBlobUrl }) => {
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
        className="overflow-hidden rounded-xl"
        style={{ aspectRatio: "16 / 9" }}
      >
        {mediaBlobUrl ? (
          <video
            className="h-full w-full object-cover rounded-xl"
            key={mediaBlobUrl}
            src={mediaBlobUrl}
            controls
            playsInline
            preload="metadata"
          />
        ) : (
          <video
            className="h-full w-full object-cover rounded-xl"
            ref={videoRef}
            autoPlay
            muted
            playsInline
          />
        )}
      </div>
    </div>
  );
};

export default InterviewRecorder;
