import React from "react";
import JobCardPrimary from "./JobCardPrimary";
import JobCardSecondary from "./JobCardSecondary";
import useTopMatches from "../hooks/useTopMatches";
import MatchingListSkeleton from "./MatchingListSkeleton";
import toast from "react-hot-toast";

const MatchingList = () => {
  const { data, isLoading, isError } = useTopMatches();

  if (isLoading) return <MatchingListSkeleton />;
  if (isError) toast.error("Failed to load matching roles.");

  const jobs = data?.items || [];

  return (
    <div>
      <div className="flex items-center justify-between mt-6 mb-4">
        <p className="text-[#0576D6] text-xl font-semibold">
          Best Matching Roles
        </p>
        <p className="text-[#1BA2A5] font-semibold text-sm ">
          Top {jobs.length} Picks
        </p>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          {jobs.slice(0, 3).map((item) => (
            <JobCardPrimary
              job={item}
              key={item.job.id}
            />
          ))}
          {jobs.length > 3 && (
            <div className="grid grid-cols-2 gap-4">
              {jobs.slice(3, 5).map((item) => (
                <JobCardSecondary
                  job={item}
                  key={item.job.id}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MatchingList;
