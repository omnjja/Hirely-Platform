import React, { useState } from "react";
import { ChevronDown, X, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const FilterChip = ({
  label,
  options = [],
  value,
  onChange,
  onClear,
}) => {
  const [open, setOpen] = useState(false);

  const selectedOption = options.find((opt) => opt.value === value);
  const displayLabel = selectedOption ? selectedOption.label : label;

  const chipClasses =
    "inline-flex h-8 min-w-[127.55px] items-center gap-2 rounded whitespace-nowrap bg-[#E8EFF3] px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-[#DCE7ED] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300";

  if (onClear) {
    return (
      <div className={chipClasses}>
        <span>{label}</span>
        <button
          type="button"
          onClick={onClear}
          aria-label={`Clear ${label} filter`}
          className="text-slate-500 hover:text-slate-700"
        >
          <X className="h-3.5 w-3.5 cursor-pointer" />
        </button>
      </div>
    );
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button type="button" className={chipClasses}>
          <span>{displayLabel}</span>

          <ChevronDown className="h-3.5 w-3.5 text-slate-500" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="w-48">
        {options.map((opt) => {
          const isSelected = opt.value === value;
          return (
            <DropdownMenuItem
              key={opt.value || opt.label}
              onClick={() => onChange?.(opt.value)}
              className="flex items-center justify-between"
            >
              {opt.label}
              {isSelected && <Check className="h-4 w-4 text-blue-600" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterChip;
