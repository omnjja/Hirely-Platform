import React from "react";
import { useApplicationStatus } from "../hooks/useApplicationStatus";
import { STATUS_CONFIG } from "@/constants/applicationsAnalysis";
import { useParams } from "react-router-dom";
import { useCandidateAppSummaryStore } from "../store/applicationSummaryStore";
import ApplicationStatusDropdown from "@/components/ui/ApplicationStatusDropdown";

const StatusCell = ({ status, editing, onToggleEdit }) => {
  const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.APPLIED;
  const { jobId } = useParams();
  const applicationId = useCandidateAppSummaryStore(
    (state) => state.editingApplicationId,
  );
  const { mutateAsync: updateStatus } = useApplicationStatus();

  async function handleAppStatus(status) {
    try {
      updateStatus({ jobId, applicationId, status });
    } catch (error) {
      console.log("error::: ", error);
    } finally {
      onToggleEdit();
    }
  }

  if (!editing) {
    return (
      <span
        className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold tracking-wide ${config.className}`}
      >
        {config.label.toUpperCase()}
      </span>
    );
  }
  return (
    <ApplicationStatusDropdown
      status={status}
      onChange={handleAppStatus}
      highlighted
    />
  );
};

export default StatusCell;
