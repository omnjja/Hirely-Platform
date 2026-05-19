import SearchComponent from "@/components/ui/SearchComponent";
import FiltersBar from "@/features/jobs/browse-job/components/FiltersBar";
import Jobs from "@/features/jobs/browse-job/components/Jobs";
import { Box, Card, Grid } from "@mui/material";

const BrowseJobs = () => {
  const role = localStorage.getItem("userRole");
  const isRecruiter = role === "HR";

  return (
    <div className="flex flex-col">
      <div className="rounded-b-lg px-3 sm:px-4 pb-3 sm:pb-4 border-[#00000033]">
        <div className="flex justify-between mt-4">
          <p className="text-sm sm:text-[30px] font-bold text-[#2E2E2E]">
            {isRecruiter ? "My Job Postings" : "Top Matches"}
          </p>
          <SearchComponent />
        </div>
        {!isRecruiter && (
          <div className="bg-white">
            <FiltersBar />
          </div>
        )}
      </div>

      <div className="w-full min-h-screen ">
        <Jobs />
      </div>
    </div>
  );
};

export default BrowseJobs;
