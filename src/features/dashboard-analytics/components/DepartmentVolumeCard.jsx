import React, { useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DepartmentVolumeSkeleton from "./DepartmentVolumeSkeleton";

const DepartmentVolumeCard = ({ data, onPageChange, isFetching }) => {
  if (isFetching || !data) {
    return <DepartmentVolumeSkeleton />;
  }
  const { departmentData, department_pagination } = data;
  const { page, total } = department_pagination;

  const totalApplicants = useMemo(
    () => departmentData.reduce((sum, stage) => sum + stage.applications, 0),
    [departmentData],
  );

  return (
    <div className="bg-white rounded-2xl border border-black p-6">
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm md:text-base font-semibold text-[#2A3439] mb-0.5">
          Volume by Department
        </p>
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
                width: `${totalApplicants > 0 ? (applications / totalApplicants) * 100 : 0}%`,
                background: "#1FA4A7",
              }}
            />
          </div>
        </div>
      ))}

      <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100">
        <p className="text-[11px] text-[#566166]">
          Page <span className="font-semibold text-[#2A3439]">{page}</span> of{" "}
          <span className="font-semibold text-[#2A3439]">{total}</span>
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onPageChange(page - 1)}
            disabled={page === 1}
            className="w-7 h-7 flex items-center justify-center rounded-lg border border-slate-200 text-[#566166] hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => onPageChange(page + 1)}
            disabled={page === total}
            className="w-7 h-7 flex items-center justify-center rounded-lg border border-slate-200 text-[#566166] hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepartmentVolumeCard;
