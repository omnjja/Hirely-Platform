import JobCard from "./JobCard";
import { formatApplicationCard } from "@/constants/applicationStatus";
import JobListSkelton from "./JobListSkelton";

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

  if (error) {
    return <p>Something went wrong</p>;
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
      <div className="flex gap-2">
        {Array.from({ length: applicationData?.totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setPage(index + 1)}
            className={`border px-3 py-1 rounded ${
              page === index + 1 ? "bg-[#1B41AA] text-white" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default JobList;
