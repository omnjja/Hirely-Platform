import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ page, totalPages, onPageChange, rangeLabel }) => {
  return (
    <div className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
      <span className="text-xs text-slate-400 text-center sm:text-left">
        {rangeLabel}
      </span>

      <div className="flex flex-wrap items-center justify-center gap-1.5">
        <button
          onClick={() => onPageChange(Math.max(1, page - 1))}
          disabled={page === 1}
          className="flex h-7 w-7 items-center justify-center rounded-md border border-slate-200 text-slate-400 disabled:opacity-50"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
        </button>

        <button className="flex h-7 w-7 items-center justify-center rounded-md text-xs font-medium bg-blue-600 text-white">{page}</button>

        <button
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
          className="flex h-7 w-7 items-center justify-center rounded-md border border-slate-200 text-slate-400 disabled:opacity-50"
        >
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
