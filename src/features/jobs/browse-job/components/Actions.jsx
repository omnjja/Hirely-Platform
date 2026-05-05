import React from "react";
import { Sparkles, Heart, RefreshCw, CheckCheck } from "lucide-react";
import ButtonComponent from "@/components/ui/ButtonComponent";
import { useIsMobile } from "@/hooks/use-mobile";
import { useApplyJobMutation } from "../../job-details/hooks/useApplyJobMutation";

const Actions = ({ id, isApplied }) => {
  const isMobile = useIsMobile();
  const { mutateAsync: applyToJob, isPending } = useApplyJobMutation();

  async function handleJobApply() {
    const JobApplyData = await applyToJob(id);
  }
  return (
    <div className="w-full flex h-10 gap-2 sm:gap-3">
      <ButtonComponent className="bg-white text-gray-700 hover:bg-gray-50 border border-gray-700">
        <Heart size={16} />
      </ButtonComponent>
      <ButtonComponent className="bg-white text-gray-700 hover:bg-gray-50 border border-gray-700">
        <span className="flex gap-1 items-center text-[11px] sm:text-sm">
          <Sparkles size={14} />
          {!isMobile && <span className="uppercase">ask ai</span>}
        </span>
      </ButtonComponent>
      <ButtonComponent
        fullWidth
        onClick={() => handleJobApply()}
        disabled={isApplied || isPending}
        className="text-[11px] sm:text-sm flex-1"
      >
        <div className="flex gap-1 justify-center">
          <p>
            {isPending
              ? "Submitting..."
              : isApplied
                ? "APPLIED"
                : isMobile
                  ? "APPLY"
                  : "APPLY WITH AUTOFILL"}
          </p>
          {isApplied && <CheckCheck />}
        </div>
      </ButtonComponent>
    </div>
  );
};

export default Actions;
