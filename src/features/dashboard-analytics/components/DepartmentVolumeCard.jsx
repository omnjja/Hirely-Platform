import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const DepartmentVolumeCard = ({ data }) => {
  const depStages = data.departmentData;
  const totalApplicants = depStages.reduce(
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
      {depStages.map(({ department, applications }) => (
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
    </div>
  );
};

export default DepartmentVolumeCard;
