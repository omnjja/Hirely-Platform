import { Play } from "lucide-react";
import { useRef, useState } from "react";
import interviewVideoPreview from "@/assets/interviewVideoPreview.jpg";

const VideoPlayer = ({ videoUrl, poster = interviewVideoPreview }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  if (!videoUrl) {
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
        <img
          src={poster}
          alt="No video"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white/60 text-xs">No video available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black flex flex-col">
      <video
        ref={videoRef}
        src={videoUrl}
        poster={poster}
        controls={playing}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="w-full flex-1 object-cover block min-h-0"
      />

      <div className="bg-black/70 flex items-center px-3 py-1.5 shrink-0">
        <button
          onClick={handlePlay}
          className="flex items-center gap-2 text-white text-xs font-medium hover:text-[#1FA4A7] transition-colors"
        >
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
            <Play size={12} className="ml-0.5 fill-white text-white" />
          </div>
          {playing ? "Playing..." : "Play video"}
        </button>
      </div>

      {!playing && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 bottom-8 flex items-center justify-center bg-black/20"
        >
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/90 shadow-lg">
            <Play className="ml-1 fill-black text-black" size={26} />
          </div>
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
