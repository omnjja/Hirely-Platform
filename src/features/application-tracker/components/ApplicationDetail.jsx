import React from "react";
import { Video, FileText } from "lucide-react";
import { money } from "@/utils/formatters";
import { STATUS_CONFIG } from "@/constants/applicationStatus";
import InfoCard from "./InfoCard";
import DetailsBar from "./DetailsBar";
import DetailProgress from "./DetailProgress";
import DetailsAbout from "./DetailsAbout";
import DetailsSidebar from "./DetailsSidebar";
import DetailsFooter from "./DetailsFooter";
import useAppNavigate from "@/hooks/useAppNavigate";

const ApplicationDetail = ({ data, onBack }) => {
  if (!data) return null;
  const { application: app, job } = data;
  if (!app || !job) return null;
  const { toStartInterview, toInterviewSummary } = useAppNavigate();
  const isInterview = app.status === "INTERVIEW";
  const isInterviewDone = ["EVALUATED", "ACCEPTED", "REJECTED"].includes(
    app.status,
  );
  const statusStyle = STATUS_CONFIG[app.status] || STATUS_CONFIG.APPLIED;

  const skills = Array.isArray(job.skills) ? job.skills.filter(Boolean) : [];
  const keywords = Array.isArray(job.keywords)
    ? job.keywords.filter(Boolean)
    : [];

  return (
    <div className="min-h-screen pb-16">
      <DetailsBar job={job} onBack={onBack} />

      <div className="max-w-4xl mx-auto px-4 md:px-8 mt-6 space-y-6">
        <InfoCard job={job} app={app} statusStyle={statusStyle} />

        {isInterview && (
          <div className="flex items-center justify-between bg-[#EEF2FF] border border-[#4C58A6] rounded-xl px-5 py-4">
            <div>
              <p className="text-sm font-semibold text-[#2A3439]">
                You've been selected for an interview!
              </p>
              <p className="text-[11px] text-[#566166] mt-0.5">
                Complete your video interview to move forward.
              </p>
            </div>
            <button
              onClick={() => toStartInterview(app.id)}
              className="flex items-center gap-2 bg-[#4C58A6] hover:bg-[#3a4585] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors shrink-0"
            >
              <Video size={14} />
              Start Interview
            </button>
          </div>
        )}

        {isInterviewDone && (
          <div className="flex items-center justify-between bg-[#F0FDF4] border border-[#1FA4A7] rounded-xl px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#1FA4A7]/10 flex items-center justify-center shrink-0">
                <Video size={15} className="text-[#1FA4A7]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#2A3439]">
                  Interview Completed
                </p>
                <p className="text-[11px] text-[#566166] mt-0.5">
                  Your interview has been recorded and is under review.
                </p>
              </div>
            </div>
            <button
              onClick={() => toInterviewSummary(app.id)}
              className="flex items-center gap-2 border border-[#1FA4A7] text-[#1FA4A7] hover:bg-[#1FA4A7] hover:text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors shrink-0"
            >
              <FileText size={14} />
              View Summary
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <DetailProgress app={app} statusStyle={statusStyle} />

            <DetailsAbout job={job} />
          </div>

          <div className="space-y-6">
            <DetailsSidebar app={app} skills={skills} keywords={keywords} />
            <DetailsFooter app={app} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetail;
