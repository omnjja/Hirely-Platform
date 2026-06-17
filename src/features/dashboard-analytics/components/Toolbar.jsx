import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import FilterChip from "./FilterChip";
import ExportButton from "./ExportButton";

const statusOptions = [
  { value: "applied", label: "Applied" },
  { value: "in_review", label: "In Review" },
  { value: "shortlisted", label: "Shortlisted" },
  { value: "interviewed", label: "Interviewed" },
  { value: "rejected", label: "Rejected" },
];

const matchingScoreOptions = [
  { value: "80+", label: "Match Score: >80%" },
  { value: "60-80", label: "Match Score: 60-80%" },
  { value: "40-60", label: "Match Score: 40-60%" },
  { value: "0-40", label: "Match Score: <40%" },
];

const Toolbar = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const [status, setStatus] = useState();
  const [matchScore, setMatchScore] = useState();

  return (
    <div className="w-full bg-white shadow-xs rounded-sm px-4 py-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        {showAdvanced && (
          <div className="flex flex-wrap items-center gap-2">
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

            <FilterChip
              label="Clear Filters"
              onClear={() => {
                setMatchScore();
                setStatus();
                setShowAdvanced();
              }}
            />
          </div>
        )}

        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={() => setShowAdvanced((prev) => !prev)}
            className={`inline-flex items-center gap-1.5 text-sm font-medium cursor-pointer ${
              showAdvanced ? "text-slate-900" : "text-slate-700"
            } hover:text-slate-900`}
          >
            <SlidersHorizontal className="h-4 w-4" />
            Advanced
          </button>

          <ExportButton onExport={(type) => console.log("export:", type)} />
        </div>
      </div>
    </div>
  );
};
export default Toolbar;
