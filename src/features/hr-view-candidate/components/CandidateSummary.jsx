import React, { useState, useEffect, useMemo } from "react";
import { Mail } from "lucide-react";
import basicInfo from "@/assets/basicInfo.webp";
import useUpdateStatusMutation from "../hooks/useUpdateStatusMutation";
import ApplicationStatusDropdown from "@/components/ui/ApplicationStatusDropdown";

const CandidateSummary = ({ data, applicationId }) => {
  const { YearsOfexperience, location, email, status, name, pfpURL, title } =
    data;
  const { mutate: updateStatus, isPending } = useUpdateStatusMutation();
  const [selectedStatus, setSelectedStatus] = useState(status);
  useEffect(() => {
    setSelectedStatus(status);
  }, [status]);
  const handleStatusChange = (newStatus) => {
    const previousStatus = selectedStatus;
    setSelectedStatus(newStatus);
    updateStatus(
      {
        applicationId,
        status: { status: newStatus },
      },
      {
        onError: () => {
          setSelectedStatus(previousStatus);
        },
      },
    );
  };
  return (
    <div className="flex flex-col items-center justify-center gap-2 border border-black bg-white p-4 rounded-lg ">
      <img
        src={pfpURL || basicInfo}
        alt="Candidate"
        className="w-30 h-30 rounded-full hidden md:block"
      />
      <p className="text-[#2A3439] text-lg font-semibold">{name}</p>
      <p className="text-[#4C58A6] text-sm">{title}</p>
      <div className="flex flex-row justify-between gap-4">
        {[
          {
            label: "Exp",
            value: `${YearsOfexperience} ${YearsOfexperience === 1 ? "year" : "years"}`,
          },
          { label: "Location", value: location },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-[#F0F4F7] rounded-2xl flex flex-col p-2"
          >
            <span className="text-[#566166] text-[10px] font-medium uppercase">
              {item.label}
            </span>
            <p className="text-[#2A3439] text-xs font-semibold">
              {" "}
              {item.value}
            </p>
          </div>
        ))}
      </div>
      <div className="text-[#2A3439] text-xs flex items-center gap-1 font-medium bg-[#E1E9EE] p-2 rounded-2xl">
        <Mail className="size-3" />
        {email}
      </div>
      <ApplicationStatusDropdown
        status={selectedStatus}
        disabled={isPending}
        onChange={handleStatusChange}
      />
    </div>
  );
};

export default CandidateSummary;
