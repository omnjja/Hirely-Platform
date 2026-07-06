import React, { useState } from "react";
import interviewVideoPreview from "@/assets/interviewVideoPreview.jpg";
import VideoPlayer from "@/components/ui/VideoPlayer";
const TRANSCRIPT_LIMIT = 150;

const FeedbackCard = ({ question, transcription, responseURL }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = transcription?.length > TRANSCRIPT_LIMIT;
  const displayText =
    isLong && !expanded
      ? transcription.slice(0, TRANSCRIPT_LIMIT) + "..."
      : transcription;
  const videoUrl = responseURL?.startsWith("http")
    ? responseURL
    : responseURL
      ? `${import.meta.env.VITE_STORAGE_URL}/${responseURL}`
      : null;
  return (
    <div className="grid grid-cols-3 gap-4 mb-4">
      <div className="col-span-1 flex h-50">
        <VideoPlayer videoUrl={videoUrl} />
      </div>
      <div className="col-span-2">
        <div className="flex flex-row gap-3 justify-between items-start mb-2">
          <p className="font-semibold text-[#0576D6] text-base">{question}</p>
        </div>
        <div className="bg-[#F3F4F5] rounded-2xl p-3 text-sm border border-black">
          <p className="font-semibold text-[#454652] text-sm mb-2">
            Video Transcript
          </p>
          <p className="text-[#454652] text-xs leading-relaxed">
            {displayText}
          </p>
          {isLong && (
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="text-[#0576D6] text-xs font-semibold mt-2 hover:underline"
            >
              {expanded ? "Show less" : "Show more"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
