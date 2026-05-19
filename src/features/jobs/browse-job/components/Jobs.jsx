import React from "react";
import Job from "./Job";
import useJobs from "../hooks/useJobs";
import { ChevronLeft, ChevronRight, RefreshCw } from "lucide-react";
import JobSkeleton from "./JobSkeleton";
import ErrorComponent from "@/components/ui/ErrorComponent";
import ButtonComponent from "@/components/ui/ButtonComponent";

const Jobs = () => {
  const { data, isLoading, isFetching, error, refetch, page, setPage } =
    useJobs();
  const hasPrev = page > 1;
  const hasNext = page < data?.totalPages;

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
        <>
          {data?.items?.map((job) => (
            <Job key={job.id} job={job} />
          ))}

          <div className="flex items-center justify-evenly pt-2 border-t border-gray-100">
            <ButtonComponent
              onClick={() => setPage((p) => p - 1)}
              disabled={!hasPrev || isFetching}
              style={{
                bgColor: "#1B41AA",
                textColor: "white",
                rounded: "4xl",
                size: "xs",
              }}
            >
              <div className="flex">
                <ChevronLeft size={15} />
                <span className="hidden sm:inline">Previous</span>
              </div>
            </ButtonComponent>

            <span className="text-xs text-gray-400">Page {page} | {data?.totalPages}</span>

            <ButtonComponent
              onClick={() => setPage((p) => p + 1)}
              disabled={!hasNext || isFetching}
              style={{
                bgColor: "#1B41AA",
                textColor: "white",
                rounded: "4xl",
                size: "xs",
              }}
            >
              <div className="flex">
                <span className="hidden sm:inline">Next</span>
                <ChevronRight size={15} />
              </div>
            </ButtonComponent>
          </div>
        </>
      )}
    </div>
  );
};

export default Jobs;
