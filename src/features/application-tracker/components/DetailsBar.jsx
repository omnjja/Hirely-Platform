import React from "react";
import { ArrowLeft } from "lucide-react";

const DetailsBar = ({ job, onBack }) => {
  return (
    <div className="bg-white border-b border-gray-100 px-4 md:px-8 py-4 flex items-center gap-4 sticky top-0 z-10">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#0576D6] transition-colors"
      >
        <ArrowLeft size={18} />
      </button>
      <span className="text-gray-300 text-lg">|</span>
      <span className="text-sm font-bold text-gray-900 truncate">
        {job.title} · {job.companyName}
      </span>
    </div>
  );
};

export default DetailsBar;
