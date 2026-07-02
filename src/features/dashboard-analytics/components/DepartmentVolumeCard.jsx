import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const DepartmentVolumeCard = ({ data, onPageChange }) => {
  const { departmentData, department_pagination } = data;
  const { page, limit, total } = department_pagination;

  const totalPages = Math.ceil(total / limit);
  const totalApplicants = departmentData.reduce(
    (sum, stage) => sum + stage.applications,
    0,
  );

  return (
    <div className="bg-white rounded-2xl border border-black p-6">
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm md:text-base font-semibold text-[#2A3439] mb-0.5">
          Volume by Department
        </p>
        <MoreHorizIcon className="text-[#566166]" />
      </div>

      {departmentData.map(({ department, applications }) => (
        <div key={department} className="mb-4">
          <div className="flex justify-between mb-1">
            <p className="text-[11px] md:text-[12px] font-semibold text-[#2A3439]">
              {department}
            </p>
            <p className="text-[11px] md:text-[12px] font-semibold text-[#1FA4A7]">
              {applications} Applicants
            </p>
          </div>
          <div className="bg-[#F0F4F7] rounded h-3 overflow-hidden">
            <div
              className="h-full rounded"
              style={{
                width: `${(applications / totalApplicants) * 100}%`,
                background: "#1FA4A7",
              }}
            />
          </div>
        </div>
      ))}

      <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100">
        <p className="text-[11px] text-[#566166]">
          Page <span className="font-semibold text-[#2A3439]">{page}</span> of{" "}
          <span className="font-semibold text-[#2A3439]">{totalPages}</span>
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onPageChange(page - 1)}
            disabled={page === 1}
            className="w-7 h-7 flex items-center justify-center rounded-lg border border-slate-200 text-[#566166] hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeftIcon style={{ fontSize: 16 }} />
          </button>
          <button
            onClick={() => onPageChange(page + 1)}
            disabled={page === totalPages}
            className="w-7 h-7 flex items-center justify-center rounded-lg border border-slate-200 text-[#566166] hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRightIcon style={{ fontSize: 16 }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepartmentVolumeCard;
