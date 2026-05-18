import React from "react";
import { CheckCircle2, Circle } from "lucide-react";

const StageTimeline = ({ current, total }) => {
  return (
    <div className="flex items-center gap-1 flex-wrap">
      {Array.from({ length: total }, (_, i) => {
        const done = i < current;
        const active = i === current - 1;
        return (
          <React.Fragment key={i}>
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all
              ${
                active
                  ? "bg-[#0576D6] text-white shadow-md shadow-blue-200"
                  : done
                    ? "bg-blue-100 text-[#0576D6]"
                    : "bg-gray-100 text-gray-400"
              }`}
            >
              {done ? <CheckCircle2 size={14} /> : <Circle size={14} />}
            </div>
            {i < total - 1 && (
              <div
                className={`h-0.5 flex-1 min-w-4 rounded ${
                  i < current - 1 ? "bg-[#0576D6]" : "bg-gray-200"
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StageTimeline;
