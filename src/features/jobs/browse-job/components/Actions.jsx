import React, { useState } from "react";
import {
  Sparkles,
  Heart,
  CheckCheck,
  Pencil,
  Trash2,
  ExternalLink,
} from "lucide-react";
import ButtonComponent from "@/components/ui/ButtonComponent";
import { useIsMobile } from "@/hooks/use-mobile";
import { useApplyJobMutation } from "../../job-details/hooks/useApplyJobMutation";
import useAppNavigate from "@/hooks/useAppNavigate";
import { useDeleteJobMutation } from "../../job-details/hooks/useDeleteJobMutation";
import ConfirmDialog from "@/components/ui/ConfirmDialog";

const Actions = ({ id, isApplied }) => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const role = localStorage.getItem("userRole");
  const { toViewJobDetails, toEditJob, back } = useAppNavigate();
  const isMobile = useIsMobile();
  const { mutateAsync: applyToJob, isPending: isApplying } = useApplyJobMutation();
  const { mutateAsync: deleteJob } = useDeleteJobMutation();

  async function handleJobApply() {
    await applyToJob(id);
  }

  const handleDelete = async () => {
    await deleteJob(id, {
      onSuccess: () => {
        if (window.location.pathname === `/jobs/${id}`) {
          back();
        }
      },
    });
    setConfirmOpen(false);
  };
  return (
    <div className="w-full flex h-10 gap-2 sm:gap-3">
      <ButtonComponent
        onClick={() => {
          role === "HR" && setConfirmOpen(true);
        }}
        className={`bg-white ${role === "HR" ? "text-red-600 hover:bg-red-50" : "text-gray-700 hover:bg-gray-50"} border border-gray-700`}
      >
        {role === "HR" ? (
          <span className="flex gap-1 items-center text-[11px] sm:text-sm">
            <Trash2 size={16} />
          </span>
        ) : (
          <span className="flex gap-1 items-center text-[11px] sm:text-sm">
            <Heart size={16} />
          </span>
        )}
      </ButtonComponent>
      <ButtonComponent
        onClick={() => {
          role === "HR" ? toEditJob(id) : null;
        }}
        className="bg-white text-gray-700 hover:bg-gray-50 border border-gray-700"
      >
        <span className="flex gap-1 items-center text-[11px] sm:text-sm">
          {role === "HR" ? (
            <Pencil size={16} />
          ) : (
            <>
              <Sparkles size={14} />
              {!isMobile && <span className="uppercase">ask ai</span>}{" "}
            </>
          )}
        </span>
      </ButtonComponent>
      <ButtonComponent
        fullWidth
        onClick={() => {
          role === "HR" ? toViewJobDetails(id) : handleJobApply();
        }}
        disabled={isApplying || isApplied}
        className="text-[11px] sm:text-sm flex-1"
      >
        <div className="flex gap-2 justify-center items-center">
          {role === "HR" ? (
            <>
              <p>View Job</p>
              <ExternalLink size={18} />
            </>
          ) : (
            <>
              <p>
                {isApplied
                  ? "APPLIED"
                  : isMobile
                    ? "APPLY"
                    : "APPLY WITH AUTOFILL"}
              </p>
              {isApplied && <CheckCheck />}
            </>
          )}
        </div>
      </ButtonComponent>
      <ConfirmDialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleDelete}
        title="Delete Job Post?"
        description="This will permanently delete the job post and all its applications. This action cannot be undone."
        confirmText="Delete"
      />
    </div>
  );
};

export default Actions;
