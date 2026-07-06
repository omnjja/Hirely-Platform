import { BriefcaseBusiness } from "lucide-react";
import useAppNavigate from "@/hooks/useAppNavigate";

const NoJobsFound = () => {
  const { toCreateJobPosting } = useAppNavigate();

  return (
    <div className="flex flex-col items-center justify-center py-24 text-center px-4">
      <div className="w-16 h-16 rounded-2xl bg-[#EEF2FF] flex items-center justify-center mb-5">
        <BriefcaseBusiness size={30} className="text-[#4C58A6]" />
      </div>

      <h2 className="text-xl font-semibold text-[#2A3439] mb-2">
        No Jobs Posted Yet
      </h2>
      <p className="text-sm text-[#566166] max-w-sm leading-relaxed">
        You haven't created any job postings yet. Create your first job to start
        tracking applications and hiring progress.
      </p>

      <button
        onClick={toCreateJobPosting}
        className="mt-6 flex items-center gap-2 bg-[#4C58A6] hover:bg-[#3a4585] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
      >
        + Create your first job
      </button>
    </div>
  );
};

export default NoJobsFound;
