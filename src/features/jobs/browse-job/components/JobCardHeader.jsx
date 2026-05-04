import React from "react";
import { Ellipsis, ExternalLink } from "lucide-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigate } from "react-router-dom";
dayjs.extend(relativeTime);

const JobCardHeader = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-start justify-between gap-2">
      <div className="w-full flex flex-col gap-1 sm:gap-1.5 min-w-0">
        <div className="w-full flex justify-between">
          <p className="bg-[#FFFBEB] text-[#BB4D00] text-xs rounded-[8px] w-fit p-1">
            Be an early applicant
          </p>
          <div className="flex items-center gap-1.5 shrink-0">
            <p className="text-[#6A7282] text-xs whitespace-nowrap">
              {dayjs(job.createdAt).fromNow()}
            </p>
            <ExternalLink
              size={18}
              color="#6A7282"
              className="cursor-pointer"
              onClick={() => navigate(job.id)}
            />
          </div>
        </div>

        <p className="text-[#0A0A0A] font-semibold text-base sm:text-xl leading-tight">
          {job.title}
        </p>

        <p className="text-[#0A0A0A] text-xs sm:text-sm line-clamp-2">
          {job.companyName}
          <span className="text-[#677080]">{` / ${job.department}`}</span>
        </p>
      </div>
    </div>
  );
};

export default JobCardHeader;
