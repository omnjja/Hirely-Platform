import React from "react";

const RankBars = ({ label, value = 0, tone }) => {
  const filledClass = tone === "rose" ? "bg-rose-400" : "bg-blue-600";
  const filledBars = Math.round((value / 100) * 5);

  return (
    <div className="text-center">
      <div className="mb-1 text-[9px] font-semibold tracking-wide text-slate-400">
        {label}
      </div>
      <div className="flex justify-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`h-2.5 w-1.5 rounded-sm ${
              i < filledBars ? filledClass : "bg-slate-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RankBars;
