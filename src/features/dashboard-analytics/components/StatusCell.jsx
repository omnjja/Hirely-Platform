import React from "react";
import {
  Check,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const STATUS_CONFIG = {
  shortlisted: {
    label: "Shortlisted",
    className: "bg-indigo-100 text-indigo-700",
  },
  in_review: { label: "In Review", className: "bg-slate-200 text-slate-600" },
  rejected: { label: "Rejected", className: "bg-rose-100 text-rose-700" },
  interview: { label: "Interview", className: "bg-violet-100 text-violet-700" },
  applied: { label: "Applied", className: "bg-sky-100 text-sky-700" },
};
const STATUS_OPTIONS = Object.entries(STATUS_CONFIG).map(([value, cfg]) => ({
  value,
  label: cfg.label,
}));


const StatusCell = ({ status, editing, onChange }) => {
  const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.applied;

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
            onClick={() => onChange?.(opt.value)}
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
