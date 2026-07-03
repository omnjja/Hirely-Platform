import React from "react";
import { Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useApplicationStatus } from "../hooks/useApplicationStatus";
import {
  STATUS_CONFIG,
  STATUS_OPTIONS,
} from "@/constants/applicationsAnalysis";

const StatusCell = ({ status, editing, onToggleEdit }) => {
  const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.APPLIED;

  const jobId = "6a0b78de036bd27e11fe2458"; // for now!!!! gonna handelded differently after updating routes
  const applicationId = "6a0b8718036bd27e11fe248e";

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide ring-2 ring-offset-1 ${config.className} ring-blue-400`}
        >
          {config.label.toUpperCase()}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-40">
        {STATUS_OPTIONS.map((opt) => (
          <DropdownMenuItem
            key={opt.value}
            onClick={() => handleAppStatus(opt.value)}
            className="flex items-center justify-between"
          >
            {opt.label}
            {opt.value === status && (
              <Check className="h-4 w-4 text-blue-600" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default StatusCell;
