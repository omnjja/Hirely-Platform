import Card from "@/components/ui/Card";
import JobForm from "@/features/jobs/job-posting/components/JobForm";
import { Box, Grid } from "@mui/material";

const CreateJobPosting = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className="w-full min-h-screen p-3 sm:p-5">
        <Grid size={{ xs: 12, lg: 10 }}>
          <JobForm mode={"post"} />
        </Grid>

        {/* AI card */}
        <Grid size={{ xs: 12, lg: 2 }}>
          <Card className="p-4 sm:p-5 lg:sticky lg:top-20">
            <p className="text-sm font-medium text-gray-500 mb-4 flex items-center gap-2">
              ? AI Card
            </p>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateJobPosting;
