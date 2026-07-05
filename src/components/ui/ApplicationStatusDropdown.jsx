import { Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  STATUS_CONFIG,
  STATUS_OPTIONS,
} from "@/constants/applicationsAnalysis";

const ApplicationStatusDropdown = ({
  status,
  onChange,
  disabled = false,
  options = STATUS_OPTIONS,
  highlighted,
}) => {
  const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.APPLIED;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild disabled={disabled}>
        <button
          type="button"
          disabled={disabled}
          className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide
                        ${config.className}
${highlighted ? "ring-2 ring-offset-1 ring-blue-400" : ""}
`}
        >
          {config.label.toUpperCase()}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="center" className="w-40">
        {options.map((opt) => (
          <DropdownMenuItem
            key={opt.value}
            onClick={() => onChange(opt.value)}
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

export default ApplicationStatusDropdown;
