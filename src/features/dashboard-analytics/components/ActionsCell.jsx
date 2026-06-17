import React from "react";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

const ActionsCell = ({
  viewing,
  onToggleViewSummary,
  editing,
  onToggleEdit,
}) => {
  return (
    <div className="flex items-center justify-end gap-3 text-slate-400">
      <button
        type="button"
        onClick={onToggleEdit}
        aria-label="Toggle status editing"
        className={editing ? "text-blue-600" : "hover:text-slate-600"}
      >
        <ModeOutlinedIcon fontSize="16" />
      </button>
      <button
        type="button"
        onClick={onToggleViewSummary}
        aria-label="Toggle status editing"
        className={viewing ? "text-blue-600" : "hover:text-slate-600"}
      >
        <RemoveRedEyeOutlinedIcon fontSize="16" />
      </button>
      <button
        type="button"
        aria-label="More actions"
        className="hover:text-slate-600"
      >
        <ArrowOutwardOutlinedIcon fontSize="16" />
      </button>
    </div>
  );
};

export default ActionsCell;
