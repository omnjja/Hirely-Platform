import React from "react";
import Section from "@/components/ui/Section";
import { Building2 } from "lucide-react";

const DetailsAbout = ({ job }) => {
  return (
    <>
      {(job.roleContext || job.coreResponsibilities) && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-5">
          {job.roleContext && (
            <Section title="Role Context">
              <p className="text-sm text-gray-600 leading-relaxed">
                {job.roleContext}
              </p>
            </Section>
          )}
          {job.coreResponsibilities && (
            <Section title="Core Responsibilities">
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {job.coreResponsibilities}
              </p>
            </Section>
          )}
        </div>
      )}

      {job.companySummary && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <Section title="About the Company">
            <div className="flex items-start gap-3">
              <Building2 size={18} className="text-[#0576D6] mt-0.5 shrink-0" />
              <p className="text-sm text-gray-600 leading-relaxed">
                {job.companySummary}
              </p>
            </div>
          </Section>
        </div>
      )}
    </>
  );
};

export default DetailsAbout;
