import React from "react";
import { Mail } from "lucide-react";
import SelectField from "@/components/ui/SelectField";
import basicInfo from "@/assets/basicInfo.webp";

const candidateData = {
  name: "Medhat",
  title: "Senior UX Architect",
  summary: [
    { label: "Exp", value: "8+ years" },
    { label: "Location", value: "Egypt" },
  ],
  email: "medhat@example.com",
  status: "In Review",
  imgURL: basicInfo,
};

const CandidateSummary = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 border border-black bg-white p-4 rounded-lg ">
      <img
        src={candidateData.imgURL}
        alt="Candidate"
        className="w-30 h-30 rounded-full hidden md:block"
      />
      <p className="text-[#2A3439] text-lg font-semibold">
        {candidateData.name}
      </p>
      <p className="text-[#4C58A6] text-sm">{candidateData.title}</p>

      <div className="flex flex-row justify-between gap-4">
        {candidateData.summary.map((item) => (
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
        {candidateData.email}
      </div>
      <SelectField
        placeholder={candidateData.status}
        containerClassName="m-0"
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
