import React from "react";
import { FileText, ChevronRight } from "lucide-react";
import { fmt } from "@/utils/formatters";
import ScoreRing from "@/components/ui/ScoreRing";

const Tag = ({ children }) => (
  <span className="bg-[#EEF1F3] text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
    {children}
  </span>
);

const DetailsSidebar = ({ app, skills, keywords }) => {
  console.log(app.resumeUrl);
  return (
    <div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
          Match Score
        </p>
        <ScoreRing value={app.matchScore ?? 0} />
        <p className="mt-3 text-sm text-gray-500 font-medium">
          {app.matchScore >= 80
            ? "Excellent fit for this role"
            : app.matchScore >= 60
              ? "Good alignment overall"
              : "Some gaps identified"}
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-3 mt-2">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          Timeline
        </p>
        {[
          ["Applied", app.appliedAt],
          ["Created", app.createdAt],
          ["Updated", app.updatedAt],
        ].map(([label, date]) => (
          <div key={label} className="flex justify-between text-sm">
            <span className="text-gray-400 font-medium">{label}</span>
            <span className="font-semibold text-gray-700">{fmt(date)}</span>
          </div>
        ))}
      </div>

      {app.resumeUrl && (
        <a
          href={app.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between mt-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow group"
        >
          <div className="flex items-center gap-3">
            <FileText size={18} className="text-[#0576D6]" />
            <span className="text-sm font-semibold text-gray-800">
              View Resume
            </span>
          </div>
          <ChevronRight
            size={16}
            className="text-gray-400 group-hover:text-[#0576D6] transition-colors"
          />
        </a>
      )}

      {skills.length > 0 && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mt-2 p-5">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
            Skills
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
        </div>
      )}

      {keywords.length > 0 && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mt-2 p-5">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
            Keywords
          </p>
          <div className="flex flex-wrap gap-2">
            {keywords.map((k) => (
              <span
                key={k}
                className="text-xs font-semibold px-3 py-1 rounded-full border border-[#0576D6]/30 text-[#0576D6] bg-blue-50"
              >
                {k}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsSidebar;
