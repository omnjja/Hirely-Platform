import React from "react";
import { ArrowLeft } from "lucide-react";
import { money } from "@/utils/formatters";
import { STATUS_CONFIG } from "@/constants/applicationStatus";
import InfoCard from "./InfoCard";
import DetailsBar from "./DetailsBar";
import DetailProgress from "./DetailProgress";
import DetailsAbout from "./DetailsAbout";
import InterviewQCard from "./InterviewQCard";
import DetailsSidebar from "./DetailsSidebar";
import DetailsFooter from "./DetailsFooter";

const ApplicationDetail = ({ data, onBack }) => {
  if (!data) return null;
  const { application: app, job } = data;
  if (!app || !job)
    return (
      <div>
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#0576D6] transition-colors"
        >
          <ArrowLeft size={18} />
        </button>
        <p className="text-center text-gray-500 py-20">
          Application details not found.
        </p>
      </div>
    );

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
