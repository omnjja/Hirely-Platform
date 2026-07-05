import { ChevronLeft, ChevronRight } from "lucide-react";
import { englishLevelScore } from "@/constants/analysisConstants";
import videoPreview from "@/assets/videoPreview.jpg";

const BehavioralAnalysis = ({ data, current, setCurrent }) => {
  const item = data[current];
  const total = data.length;

  const analysis = [
    { label: "Confidence", value: Math.round(item.confidence || 0) },
    { label: "Communication", value: Math.round(item.communication || 0) },
    {
      label: "English Prof.",
      value: englishLevelScore[item.englishLevel] ?? 0,
      text: item.englishLevel || "—",
    },
    { label: "Body Language", value: Math.round(item.bodyLanguage || 0) },
  ];

  const videoUrl = item.videoURL?.startsWith("http")
    ? item.videoURL
    : item.videoURL
      ? `${import.meta.env.VITE_STORAGE_URL}/${item.videoURL}`
      : null;

  return (
    <div className="border border-[#0A0A0A] rounded-xl bg-[#0576D6]  text-white flex flex-col gap-2">
      <div className="w-full overflow-hidden bg-white aspect-video rounded-t-lg">
        {videoUrl ? (
          <video
            key={videoUrl}
            src={videoUrl}
            poster={videoPreview}
            controls
            className="w-full h-full object-cover"
            preload="metadata"
          >
            Your browser does not support video.
          </video>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-black/50 text-xs">
            No video available
          </div>
        )}
      </div>
      <div className="flex items-center justify-between gap-2 px-3 pt-3">
        <p className="text-[11px] font-medium text-white/80 flex-1">
          <span className="font-semibold text-white">Q{current + 1}:</span>{" "}
          {item.question}
        </p>
        <div className="flex items-center gap-1 shrink-0 ">
          <button
            onClick={() => setCurrent((p) => p - 1)}
            disabled={current === 0}
            className="w-6 h-6 flex items-center justify-center rounded-md bg-white/20 hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={14} />
          </button>
          <span className="text-[10px] font-medium min-w-7 text-center">
            {current + 1}/{total}
          </span>
          <button
            onClick={() => setCurrent((p) => p + 1)}
            disabled={current === total - 1}
            className="w-6 h-6 flex items-center justify-center rounded-md bg-white/20 hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      <div className="p-3">
        <p className="text-sm font-semibold mb-2">Behavioral Analysis</p>
        <div className="grid grid-cols-2 gap-x-4">
          {analysis.map(({ label, value, text }) => (
            <div key={label} className="mb-3">
              <div className="flex justify-between gap-1 mb-1">
                <p className="text-xs font-semibold">{label}</p>
                <p className="text-xs font-semibold">{text ?? `${value}%`}</p>
              </div>

              <div className="h-2 rounded bg-[#F0F4F7]">
                <div
                  className="h-full rounded bg-[#1FA4A7] transition-all duration-500"
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BehavioralAnalysis;
