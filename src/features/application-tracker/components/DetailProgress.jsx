import React from "react";
import { Zap, CalendarDays } from "lucide-react";
import StageTimeline from "./StageTimeline";
import { fmt } from "@/utils/formatters";
import Section from "@/components/ui/Section";

const DetailProgress = ({ app, statusStyle }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
      <Section title="Application Progress">
        <div className="flex items-center justify-between text-xs font-semibold text-gray-400 uppercase mb-3">
          <span>
            Stage {app.currentStage} of {app.totalStages}
          </span>
          <span>{app.progressPercent}% complete</span>
        </div>
        <StageTimeline current={app.currentStage} total={app.totalStages} />
        {/* bar */}
        <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full ${statusStyle.barColor}`}
            style={{
              width: `${app.progressPercent}%`,
              transition: "width 0.8s ease",
            }}
          />
        </div>
      </Section>

      {app.nextStepTitle && (
        <div className="flex items-center gap-3 bg-blue-50 rounded-xl px-4 py-3 mt-2">
          <Zap size={16} className="text-[#0576D6] shrink-0" />
          <div>
            <p className="text-xs font-semibold text-[#0576D6] uppercase tracking-wide">
              Next Step
            </p>
            <p className="text-sm font-bold text-gray-800">
              {app.nextStepTitle}
            </p>
            {app.nextStepAt && (
              <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                <CalendarDays size={11} />
                {fmt(app.nextStepAt)}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailProgress;
