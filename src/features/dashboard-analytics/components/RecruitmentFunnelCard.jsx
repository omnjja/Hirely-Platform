import React from "react";
import { recruitmentStages } from "@/constants/overviewDashboardStages";

const RecruitmentFunnelCard = ({ data }) => {
  const stages = recruitmentStages(data);

  return (
    <div className="bg-white rounded-2xl border border-black p-6">
      <h2 className="text-sm font-semibold text-[#2A3439] mb-0.5">
        Recruitment Funnel
      </h2>
      <p className="text-[10px] md:text-xs text-[#566166] mb-5">
        Efficiency per stage
      </p>

      <div className="space-y-3">
        {stages.map(
          ({ label, count, pct, filled, blue, purple, textColor }) => (
            <div key={label}>
              <div className="flex justify-between mb-1"></div>
              <div className="bg-slate-100 rounded h-10 overflow-hidden">
                <div
                  className="h-full rounded flex items-center pl-3 transition-all duration-500"
                  style={{
                    width: `${pct}%`,
                    minWidth: pct > 0 && blue ? "80px" : undefined,
                    background: blue
                      ? "#0576D6"
                      : purple
                        ? "#4C58A633"
                        : filled
                          ? "#eee"
                          : "#e2e8f0",
                    border: !filled && !blue ? "0.5px solid #cbd5e1" : "none",
                  }}
                >
                  <span
                    className={`text-[10px] md:text-[11px] font-semibold ${textColor} whitespace-nowrap`}
                  >
                    {label} ({count})
                  </span>
                </div>
              </div>
            </div>
          ),
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-slate-100 text-center">
        {[
          ["Overall CV-to-Hire", `${data?.cv_to_hire || "0"}%`],
          ["Interview-to-Hire", `${data?.interview_to_hire || "0"}%`],
        ].map(([label, val]) => (
          <div key={label}>
            <p className="text-[10px] uppercase tracking-wide text-[#566166] mb-1 font-semibold">
              {label}
            </p>
            <p className="text-base md:text-lg font-bold text-[#0576D6]">
              {val}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecruitmentFunnelCard;
