import React from "react";
import Section from "@/components/ui/Section";

const InterviewQCard = ({ questions }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <Section title="Likely Interview Questions">
        <ul className="space-y-3">
          {questions.map((q, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-50 text-[#0576D6] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              <p className="text-sm text-gray-700">{q}</p>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
};

export default InterviewQCard;
