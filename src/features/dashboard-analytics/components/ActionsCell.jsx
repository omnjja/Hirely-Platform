import React from "react";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ActionsCell = ({
  viewing,
  onToggleViewSummary,
  editing,
  onToggleEdit,
}) => {
  return (
    <div className="flex items-center justify-center md:justify-end gap-4 text-slate-400">
      {/* desktop icons */}
      <div className="hidden md:flex items-center gap-4">
        <button
          onClick={onToggleEdit}
          aria-label="Edit Status"
          className={editing ? "text-blue-600" : "hover:text-slate-600"}
        >
          <ModeOutlinedIcon sx={{ fontSize: 18 }} />
        </button>

        <button
          onClick={onToggleViewSummary}
          aria-label="View Summary"
          className={viewing ? "text-blue-600" : "hover:text-slate-600"}
        >
          <RemoveRedEyeOutlinedIcon sx={{ fontSize: 18 }} />
        </button>

        <button  className="hover:text-slate-600" aria-label="View Profile">
          <ArrowOutwardOutlinedIcon sx={{ fontSize: 18 }} />
        </button>
      </div>

      {/* mobile dropdown */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="text-slate-500 hover:text-slate-700">
              <MoreVertIcon />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem aria-label="Edit Status" onClick={onToggleEdit}>
              <ModeOutlinedIcon sx={{ fontSize: 14 }} />
              Edit Status
            </DropdownMenuItem>

            <DropdownMenuItem aria-label="View Summary" onClick={onToggleViewSummary}>
              <RemoveRedEyeOutlinedIcon sx={{ fontSize: 14 }} />
              View Summary
            </DropdownMenuItem>

            <DropdownMenuItem aria-label="View Profile" >
              <ArrowOutwardOutlinedIcon sx={{ fontSize: 14 }} />
              View Profile
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default ActionsCell;
