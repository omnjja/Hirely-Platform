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

      <Box sx={{ flexGrow: 1 }} className="bg-[#F4F6F8]">
        <Grid container spacing={2} className="w-full min-h-screen p-3 sm:p-5">
          <Grid size={{ xs: 12, lg: 10 }} className="flex-1">
            <Jobs />
          </Grid>
          <Grid size={{ xs: 12, lg: 2 }}>
            <Card className="p-4 sm:p-5 lg:sticky lg:top-20">
              <p className="text-sm font-medium text-gray-500 mb-4 flex items-center gap-2">
                ? AI Card
              </p>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <div></div>
    </div>
  );
};

export default BrowseJobs;
