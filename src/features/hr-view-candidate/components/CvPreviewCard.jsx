const CvPreviewCard = ({ data }) => {
  const { CVUrl } = data;
  return (
    <div className="bg-[#EFF4F7] border border-black rounded-2xl p-4 md:p-5">
      <div className="flex items-center justify-between mb-3">
        <p className="text-[12px] font-semibold tracking-wide text-[#566166]">
          CV PREVIEW
        </p>
        <button
          aria-label="Open CV"
          className="text-[#4C58A6] hover:text-[#3a4585]"
          onClick={() => window.open(CVUrl, "_blank")}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </button>
      </div>

      <div className="bg-white rounded-[8px] p-5 flex flex-col gap-1.25 md:gap-2.5">
        <div className="h-3.5 w-[35%] bg-slate-300 rounded" />
        <div className="h-2.5 w-[85%] bg-slate-200 rounded" />
        <div className="h-2.5 w-[80%] bg-slate-200 rounded" />
        <div className="h-3.5 w-[22%] bg-slate-300 rounded mt-2" />
        <div className="h-2.5 w-[85%] bg-slate-200 rounded" />
        <div className="h-2.5 w-[78%] bg-slate-200 rounded" />
        <div className="h-2.5 w-[40%] bg-slate-200 rounded" />
      </div>
    </div>
  );
};

export default CvPreviewCard;
