import React, { useState, useEffect, useMemo } from "react";
import { Mail } from "lucide-react";
import SelectField from "@/components/ui/SelectField";
import basicInfo from "@/assets/basicInfo.webp";
import useUpdateStatusMutation from "../hooks/useUpdateStatusMutation";

const APPLICATION_STATUS = [
  { label: "Applied", value: "APPLIED" },
  { label: "In Review", value: "IN_REVIEW" },
  { label: "Shortlisted", value: "SHORTLISTED" },
  { label: "Rejected", value: "REJECTED" },
  { label: "Accepted", value: "ACCEPTED" },
];

const CandidateSummary = ({ data, applicationId }) => {
  const { YearsOfexperience, location, email, status, name, pfpURL, title } =
    data;
  const { mutate: updateStatus, isPending } = useUpdateStatusMutation();
  const [selectedStatus, setSelectedStatus] = useState(status);
  useEffect(() => {
    setSelectedStatus(status);
  }, [status]);
  const availableStatuses = useMemo(() => {
    const currentIndex = APPLICATION_STATUS.findIndex(
      (s) => s.value === selectedStatus,
    );

    return APPLICATION_STATUS.slice(currentIndex);
  }, [selectedStatus]);
  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setSelectedStatus(newStatus);
    console.log("Selected status:", newStatus);
    updateStatus({
      applicationId,
      status: { status: newStatus },
    });
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
          { label: "Exp", value: `${YearsOfexperience}+ years` },
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
      <SelectField
        placeholder={status}
        containerClassName="m-0"
        value={selectedStatus}
        disabled={isPending}
        onChange={handleStatusChange}
        options={availableStatuses}
        sx={{
          "& .MuiOutlinedInput-root": {
            bgcolor: "#D5E3FC",
            borderRadius: "14px",

            "& fieldset": {
              border: "none",
            },

            "&:hover fieldset": {
              border: "none",
            },

            "&.Mui-focused fieldset": {
              border: "none",
            },
          },

          "& .MuiSelect-select": {
            color: "#455367",
            fontWeight: 600,
            fontSize: "12px",
          },
          "& .MuiFormHelperText-root": {
            hight: "0px",
            margin: "0px",
            fontSize: "0px",
          },
        }}
      />
    </div>
  );
};

export default CandidateSummary;
