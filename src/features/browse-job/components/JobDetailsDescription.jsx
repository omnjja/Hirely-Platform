import React from "react";
import JobDetailsDescriptionCard from "./JobDetailsDescriptionCard";
import { CircleCheck, Zap } from "lucide-react";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

const JobDetailsDescription = ({
  coreResponsibilities,
  skills,
  experience,
}) => {
  const responsibilities = coreResponsibilities
    .split(".")
    .map((s) => s.trim())
    .filter(Boolean);

  skills = [`${experience} Years of experience required`, ...skills];
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-20">
      <JobDetailsDescriptionCard
        title={"Responsibilities"}
        icon={<Zap className="text-sm sm:text-xl text-[#1B41AA]" />}
        subIcon={
          <StarBorderOutlinedIcon
            sx={{ fontSize: 14 }}
            className="text-[#1B41AA]"
          />
        }
        color={`#1B41AA`}
        data={responsibilities}
      />
      <JobDetailsDescriptionCard
        title={"Requirements"}
        icon={<CircleCheck className="text-sm sm:text-xl text-[#1FA4A7]" />}
        subIcon={
          <CheckCircleOutlineOutlinedIcon
            sx={{ fontSize: 14 }}
            className="text-[#1FA4A7]"
          />
        }
        color={"#1FA4A7"}
        data={skills}
      />
    </div>
  );
};

export default JobDetailsDescription;
