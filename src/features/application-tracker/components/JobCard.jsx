import { STATUS_CONFIG } from "@/constants/applicationStatus";
import ProgressBar from "./ProgressBar";
import React from "react";

const JobCard = ({
  logo,
  company,
  role,
  status, // "INTERVIEW" | "ACCEPTED" | "APPLIED" | "IN_REVIEW" | "REJECTED"
  stageLabel, // e.g. "CURRENT STAGE" | "STATUS" | "OUTCOME"
  stageValue, // e.g. "STAGE 3 OF 5" | "COMPLETED" | "PENDING" | "FINALIZED"
  totalStages = 5,
  currentStage = 1,
  nextStepIcon, // emoji or icon "
  nextStepText, // e.g. "Next step: Technical Interview (Oct 24)"
  actionLabel, // button label e.g. "View Details" | "Review Offer"
  actionVariant = "ghost", // "ghost" | "solid"
  onAction,
}) => {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.APPLIED;
  return (
    <div
      className={` border-gray-100 rounded-2xl shadow-sm border transition-all duration-200 hover:shadow-md`}
    >
      <div className={`h-1 w-full ${config.borderTop}`} />

      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 font-bold text-sm">
              {company?.[0]}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base">{company}</h3>
              <p className="text-gray-500 text-sm">{role}</p>
            </div>
          </div>

          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full uppercase whitespace-nowrap ${config.badgeBg} ${config.badgeText}`}
          >
            {config.label}
          </span>
        </div>

        <div className="flex justify-between text-[11px] font-semibold text-gray-400 uppercase mb-2">
          <span>{stageLabel}</span>
          <span>{stageValue}</span>
        </div>

        <ProgressBar
          totalStages={totalStages}
          currentStage={currentStage}
          barColor={config.barColor}
        />

        {nextStepText && (
          <p
            className={`mt-3 text-sm font-medium ${config.badgeText} flex items-center gap-1.5`}
          >
            {nextStepIcon && <span>{nextStepIcon}</span>}
            {nextStepText}
          </p>
        )}

        {actionLabel && (
          <button
            onClick={onAction}
            className={`mt-4 w-full h-11 rounded-full text-sm font-semibold transition-all duration-200
              ${
                actionVariant === "solid"
                  ? "bg-[#0576D6] text-white hover:bg-[#0461b8]"
                  : "bg-gray-100 text-[#0576D6] hover:bg-gray-200"
              }
            `}
          >
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default JobCard;
