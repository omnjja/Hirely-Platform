import React from "react";

const RankBars = ({ label, value, tone }) => {
  const filledClass = tone === "rose" ? "bg-rose-400" : "bg-blue-600";
  return (
    <div className="text-center">
      <div className="mb-1 text-[9px] font-semibold tracking-wide text-slate-400">
        {label}
      </div>
      <div className="flex justify-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`h-2.5 w-1.25 rounded-sm ${
              i < value ? filledClass : "bg-slate-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RankBars;
