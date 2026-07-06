import JobCard from "./JobCard";
import { formatApplicationCard } from "@/constants/applicationStatus";
import JobListSkelton from "./JobListSkelton";
import toast from "react-hot-toast";
import { ChevronLeft, ChevronRight } from "lucide-react";

const JobList = ({
  applicationData,
  isLoading,
  error,
  setPage,
  page,
  onSelectApplication,
}) => {
  if (isLoading) {
    return <JobListSkelton />;
  }
  const totalPages = applicationData?.totalPages;
  const getPageNumbers = () => {
    if (totalPages <= 7)
      return Array.from({ length: totalPages }, (_, i) => i + 1);

    const pages = [];
    pages.push(1);

    if (page > 3) pages.push("...");

    for (
      let i = Math.max(2, page - 1);
      i <= Math.min(totalPages - 1, page + 1);
      i++
    ) {
      pages.push(i);
    }

    if (page < totalPages - 2) pages.push("...");

    pages.push(totalPages);
    return pages;
  };

  if (error) {
    return toast.error("failed to load data");
  }
  if (!applicationData?.items?.length) {
    return (
      <div className="flex items-center justify-center py-20 text-gray-500">
        No Applications Found
      </div>
    );
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {applicationData?.items?.map((item, index) => (
          <JobCard
            key={index}
            {...formatApplicationCard(item)}
            onClick={() => onSelectApplication(item.application.id)}
          />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-1.5 py-4">
          {/* Prev */}
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={15} />
          </button>

          {/* Page numbers */}
          {getPageNumbers().map((p, i) =>
            p === "..." ? (
              <span
                key={`dots-${i}`}
                className="w-8 h-8 flex items-center justify-center text-slate-400 text-sm"
              >
                ···
              </span>
            ) : (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors
                ${
                  page === p
                    ? "bg-[#1B41AA] text-white"
                    : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {p}
              </button>
            ),
          )}

          {/* Next */}
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={15} />
          </button>
        </div>
      )}
    </>
  );
};

export default JobList;
