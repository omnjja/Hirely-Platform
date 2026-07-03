import React from "react";
import { Download } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ExportButton = ({ onExport }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="cursor-pointer inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-slate-900"
        >
          <Download className="h-4 w-4" />
          Export
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-(--radix-dropdown-menu-trigger-width) min-w-36"
      >
        <DropdownMenuItem onClick={() => onExport("xlsx")}>
          Export as Excel
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onExport("pdf")}>
          Export as PDF
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onExport("csv")}>
          Export as CSV
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ExportButton;
