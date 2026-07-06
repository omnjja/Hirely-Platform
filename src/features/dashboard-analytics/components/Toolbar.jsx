import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import FilterChip from "./FilterChip";
import ExportButton from "./ExportButton";
import {
  matchingScoreOptions,
  statusOptions,
} from "@/constants/applicationsAnalysis";
import { useExportApplicationsAnalysis } from "../hooks/useExportApplicationsAnalysis";
import { useFileDownload } from "@/hooks/useFileDownload";
import { toast } from "react-hot-toast";
import { useAnalysisFilterationStore } from "../store/AnalysisFilterationStore";

const Toolbar = ({ jobId }) => {
  const { page, limit, status, matchScore, setStatus, setMatchScore } =
    useAnalysisFilterationStore();
  const { mutateAsync: exportData } = useExportApplicationsAnalysis();
  const { downloadFile } = useFileDownload();
  const [showAdvanced, setShowAdvanced] = useState(false);

  const clearFilters = () => {
    setStatus(undefined);
    setMatchScore(undefined);
    setShowAdvanced(false);
  };

  const handleExport = async (format) => {
    downloadFile({
      requestFn: () =>
        exportData({
          jobId,
          format,
          page,
          limit,
          applicationStatus: status,
          matchScore,
        }),
      filename: `applications.${format}`,
      toast,
    });
  };

  return (
    <div className="w-full rounded-lg bg-white px-4 py-3 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={() => setShowAdvanced((prev) => !prev)}
          className={`inline-flex w-fit items-center gap-2 text-sm font-medium transition-colors cursor-pointer ${
            showAdvanced
              ? "text-slate-900"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <SlidersHorizontal className="h-4 w-4" />
          Advanced Filters
        </button>
        <ExportButton onExport={handleExport} />
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          showAdvanced
            ? "max-h-40 opacity-100 mt-4 border-t pt-4"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 gap-2 sm:flex sm:flex-wrap sm:items-center">
          <FilterChip
            label="STATUS"
            options={statusOptions}
            value={status}
            onChange={setStatus}
          />
          <FilterChip
            label="MATCH SCORE"
            options={matchingScoreOptions}
            value={matchScore}
            onChange={setMatchScore}
          />

          <FilterChip label="Clear Filters" onClear={clearFilters} />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
