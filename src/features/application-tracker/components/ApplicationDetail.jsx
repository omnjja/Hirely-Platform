import React from "react";
import { Video } from "lucide-react";
import { money } from "@/utils/formatters";
import { STATUS_CONFIG } from "@/constants/applicationStatus";
import InfoCard from "./InfoCard";
import DetailsBar from "./DetailsBar";
import DetailProgress from "./DetailProgress";
import DetailsAbout from "./DetailsAbout";
import InterviewQCard from "./InterviewQCard";
import DetailsSidebar from "./DetailsSidebar";
import DetailsFooter from "./DetailsFooter";
import useAppNavigate from "@/hooks/useAppNavigate";

const ApplicationDetail = ({ data, onBack }) => {
  if (!data) return null;
  const { application: app, job } = data;
  if (!app || !job) return null;
  const { toStartInterview } = useAppNavigate();
  const isInterview = app.status === "INTERVIEW";
  const statusStyle = STATUS_CONFIG[app.status] || STATUS_CONFIG.APPLIED;
  const comp =
    money(job.compensationMin) && money(job.compensationMax)
      ? `${money(job.compensationMin)} – ${money(job.compensationMax)}`
      : money(job.compensationMin) || money(job.compensationMax);

  const skills = Array.isArray(job.skills) ? job.skills.filter(Boolean) : [];
  const keywords = Array.isArray(job.keywords)
    ? job.keywords.filter(Boolean)
    : [];
  const questions = Array.isArray(job.interviewerQuestions)
    ? job.interviewerQuestions.filter(Boolean)
    : [];

  return (
    <div className="min-h-screen pb-16">
      <DetailsBar job={job} onBack={onBack} />

      <div className="max-w-4xl mx-auto px-4 md:px-8 mt-6 space-y-6">
        <InfoCard job={job} app={app} statusStyle={statusStyle} comp={comp} />

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <DetailProgress app={app} statusStyle={statusStyle} />

            <DetailsAbout job={job} />

            {questions.length > 0 && <InterviewQCard questions={questions} />}
          </div>

          <div className="space-y-6">
            <DetailsSidebar app={app} skills={skills} keywords={keywords} />
            <DetailsFooter job={job} app={app} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetail;
