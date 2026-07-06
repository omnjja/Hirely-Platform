import { formatDateForDisplay } from "@/utils/DateFormatter";
import useActiveHiringProgress from "../hooks/useActiveHiringProgress";
import ActiveHiringSkeleton from "./ActiveHiringSkeleton";
import { useState } from "react";
import useAppNavigate from "@/hooks/useAppNavigate";

const ActiveHiringProgress = () => {
  const { isLoading, isError, data } = useActiveHiringProgress();
  const [showAll, setShowAll] = useState(false);
  const { toApplicationsDashboard } = useAppNavigate();

  if (isLoading) {
    return <ActiveHiringSkeleton />;
  }
  if (isError) {
    return (
      <div className="ml-3 mr-3 md:mr-0 my-3 flex flex-col gap-6">
        <p className="text-center text-cyan-950 font-semibold">
          Error occurred while fetching active hiring progress data.
        </p>
      </div>
    );
  }
  const displayedData = showAll ? data : data.slice(0, 5);
  return (
    <div className="bg-white rounded-2xl border border-black p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-sm  md:text-base font-semibold text-[#2A3439]">
          Active Hiring Progress
        </h2>
        <button
          className="text-[10px] md:text-[11px] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed  font-semibold tracking-widest uppercase text-[#4C58A6]"
          onClick={() => setShowAll(!showAll)}
          disabled={data.length <= 5}
        >
          {showAll ? "Show Less" : "View all openings"}
        </button>
      </div>

      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr className="bg-[#EFF4F7]">
            {[
              "Role Name",
              "Department",
              "Hiring Progress",
              "Target Date",
              "Action",
            ].map((h) => (
              <th
                key={h}
                className="text-[9px] font-semibold text-[#566166] tracking-widest uppercase text-left px-3 py-2.5"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedData.map((role, i) => {
            return (
              <tr key={i} className="border-t border-slate-100">
                <td className="px-3 py-4">
                  <p className="text-[12px] md:text-sm font-semibold text-[#2A3439]">
                    {role.Role_name}
                  </p>
                </td>
                <td className="px-3 py-4  text-[12px] md:text-sm text-[#566166]">
                  {role.department}
                </td>
                <td className="px-3 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-[#4C58A6]`}
                        style={{ width: `${role.hiring_progress}%` }}
                      />
                    </div>
                    <span className="text-[12px] md:text-sm font-medium text-slate-700 min-w-8.5">
                      {role.hiring_progress}%
                    </span>
                  </div>
                </td>
                <td className="px-3 py-4 text-[12px] md:text-sm text-[#2A3439]">
                  {formatDateForDisplay(role.target_date, true)}
                </td>
                <td className="px-3 py-4">
                  <button
                    className="md:w-8 md:h-8 h-4 w-4 inline-flex items-center justify-center text-[#566166] hover:bg-slate-50"
                    onClick={() => toApplicationsDashboard(role.jobId)}
                    aria-label={`View applications for ${role.Role_name}`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ActiveHiringProgress;
