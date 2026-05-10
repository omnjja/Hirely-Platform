import React from "react";
import Card from "@/components/ui/Card";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import { useRecentJobs } from "../hooks/useRecentJobs";
import { formatText } from "@/utils/formatText";
import { formatSalary } from "@/utils/formatSalary";
import useAppNavigate from "@/hooks/useAppNavigate";
import RecentJobsSkeleton from "./RecentJobsSkeleton";

const LandingRecentJobs = () => {
  const { data: recentJobs, isLoading, isError } = useRecentJobs();
  const { toViewJobDetails } = useAppNavigate();
  if (isLoading) {
    return <RecentJobsSkeleton />;
  }

  if (isError) {
    return;
  }
  return (
    <div className="flex flex-col items-start gap-4">
      <p className="font-bold text-xl md:text-2xl text-[#2C2F31]">
        Most Recent Jobs
      </p>
      {recentJobs?.map((job) => (
        <Card
          key={job.id}
          className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 cursor-pointer transition hover:shadow-lg duration-400"
          rounded="rounded-4xl sm:rounded-[48px]"
        >
          <div className="flex gap-3 sm:gap-5 items-center">
            <p className="py-2 px-4 sm:py-3 sm:px-5 bg-[#E5E9EB] rounded-full text-base sm:text-xl font-bold text-amber-950 shrink-0 uppercase">
              {job.title[0]}
            </p>
            <div className="flex flex-col">
              <p className="font-bold text-base sm:text-lg text-[#2C2F31]">
                {job.title}
              </p>
              <p className="text-xs sm:text-sm text-[#595C5E]">
                {job.companyName} • {formatText(job.jobType)} •
                {" $" +
                  formatSalary(job.compensationMin) +
                  " - " +
                  "$" +
                  formatSalary(job.compensationMax)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 self-end sm:self-auto">
            <div className="flex flex-col">
              <p className="font-bold text-sm sm:text-base text-[#006948]">
                74% Match
                {/* {job.match} */}
              </p>
              <p className="text-[9px] sm:text-[10px] text-[#747779]">
                Relevant Skills: 12
                {/* {job.skills} */}
              </p>
            </div>
            <p className="flex items-center p-1 bg-[#E5E9EB] rounded-full text-lg sm:text-xl font-bold text-[#747779] cursor-pointer transition hover:scale-110 duration-400">
              <ArrowOutwardOutlinedIcon
                onClick={() => toViewJobDetails(`jobs/${job.id}`)}
              />
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default LandingRecentJobs;
