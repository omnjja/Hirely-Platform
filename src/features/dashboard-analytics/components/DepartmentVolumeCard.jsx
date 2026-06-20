import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const depStages = [
  {
    label: "Engineering & Product",
    count: 482,
  },
  {
    label: "Sales & Marketing",
    count: 312,
  },
  {
    label: "Operations",
    count: 245,
  },
  {
    label: "Human Resources",
    count: 128,
  },
];

const DepartmentVolumeCard = () => {
  const totalApplicants = depStages.reduce(
    (sum, stage) => sum + stage.count,
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
      {depStages.map(({ label, count }) => (
        <div key={label} className="mb-4">
          <div className="flex justify-between mb-1">
            <p className="text-[11px] md:text-[12px] font-semibold text-[#2A3439]">
              {label}
            </p>
            <p className="text-[11px] md:text-[12px] font-semibold text-[#1FA4A7]">
              {count} Applicants
            </p>
          </div>
          <div className="bg-[#F0F4F7] rounded h-3 overflow-hidden">
            <div
              className="h-full rounded"
              style={{
                width: `${(count / totalApplicants) * 100}%`,
                background: "#1FA4A7",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DepartmentVolumeCard;
