import React from "react";
import Job from "./Job";
import useJobs from "../hooks/useJobs";
import { RefreshCw } from "lucide-react";
import JobSkeleton from "./JobSkeleton";
import ErrorComponent from "@/components/ui/ErrorComponent";

const Jobs = () => {
  const { data, isLoading, isFetching, error, refetch } = useJobs();

  if (isLoading)
    return (
      <div className="flex flex-col gap-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <JobSkeleton key={i} />
        ))}
      </div>
    );

  if (error)
    return <ErrorComponent error={error.message} action={() => refetch()} />;

  return (
    <div className="flex flex-col gap-5">
      {isFetching && (
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <RefreshCw size={12} className="animate-spin" />
          Refreshing...
        </div>
      )}

      {data?.items?.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-2 py-20 text-center">
          <p className="font-semibold text-gray-700">No jobs found</p>
          <p className="text-sm text-gray-400">
            Check back later for new openings
          </p>
        </div>
      ) : (
        data?.items?.map((job) => <Job key={job.id} job={job} />)
      )}
    </div>
  );
};

export default Jobs;
