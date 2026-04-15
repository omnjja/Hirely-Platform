import RecruiterLayout from "@/components/layout/RecruiterLayout";
import Card from "@/components/ui/Card";
import BasicInfoSection from "@/features/job-posting/components/BasicInfoSection";
import JobCompensations from "@/features/job-posting/components/JobCompensations";
import JobDetails from "@/features/job-posting/components/JobDetails";
import JobSkills from "@/features/job-posting/components/JobSkills";
import VideoQuestions from "@/features/job-posting/components/VideoQuestions";
import { Box, Grid } from "@mui/material";
// const initialForm = {
//   jobTitle: "",
//   department: "",
//   jobType: "",
//   location: "",
//   experienceLevel: "",
//   minSalary: "",
//   maxSalary: "",
//   roleContext: "",
//   responsibilities: "",
// };

// const defaultQuestions = [
//   {
//     id: 1,
//     text: "Tell us about your most challenging project and how you navigated technical debt.",
//   },
// ];

const CreateJobPosting = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className="w-full min-h-screen p-3 sm:p-5">
        {/* Main Content */}
        <Grid size={{ xs: 12, lg: 10 }}>
          <Card className="p-4 sm:p-6">
            {/* Header */}
            <div className="mb-4">
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-1">
                <span className="text-gray-500">Jobs</span> - New Requisition
              </p>

              <h1 className="text-lg sm:text-2xl font-bold text-gray-900">
                Create New Job Posting
              </h1>

              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Define the parameters for your next key hire. Use our
                AI-enhanced editor to refine descriptions and set video
                screening hurdles.
              </p>
            </div>

            {/* Sections */}
            <div className="mt-4 sm:mt-6">
              <BasicInfoSection />
            </div>

            <div className="mt-4 sm:mt-6">
              <Grid container spacing={2}>
                {/* left */}
                <Grid
                  size={{ xs: 12, md: 6 }}
                  className="flex flex-col gap-4 sm:gap-6"
                >
                  <JobCompensations />
                  <JobSkills />
                </Grid>

                {/* right */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <JobDetails />
                </Grid>
              </Grid>
            </div>

            {/* actions */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
              {/* buttons */}
            </div>
          </Card>

          {/* Video Questions */}
          <div className="mt-4 sm:mt-6">
            <VideoQuestions />
          </div>
        </Grid>

        {/* Sidebar */}
        <Grid size={{ xs: 12, lg: 2 }}>
          <Card className="p-4 sm:p-5 lg:sticky lg:top-5">
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
