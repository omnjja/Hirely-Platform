import RecruiterLayout from "@/components/layout/RecruiterLayout";
import Card from "@/components/ui/Card";
import BasicInfoSection from "@/features/job-posting/components/BasicInfoSection";
import JobCompensations from "@/features/job-posting/components/JobCompensations";
import JobDetails from "@/features/job-posting/components/JobDetails";
import JobSkills from "@/features/job-posting/components/JobSkills";
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
      <Grid container spacing={2} className="w-full min-h-screen flex p-5">
        <Grid size={{ xs: 6, md: 8 }}>
          <Card>
            {/* Header */}
            <div className="mb-2">
              <p className="text-xs font-semibold uppercase tracking-widest mb-1">
                <span className="text-gray-500">Jobs</span> - New Requisition
              </p>
              <h1 className="text-2xl font-bold text-gray-900">
                Create New Job Posting
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Define the parameters for your next key hire. Use our
                AI-enhanced editor to refine descriptions and set video
                screening hurdles.
              </p>
            </div>

            <div className="mt-6">
              <BasicInfoSection />
            </div>

            <div className="mt-6">
              <Grid container spacing={2}>
                <Grid size={{ xs: 6, md: 6 }} className="flex flex-col gap-6">
                  <JobCompensations />
                  <JobSkills />
                </Grid>
                <Grid size={{ xs: 6, md: 6 }}>
                  <JobDetails />
                </Grid>
              </Grid>
            </div>

            <div className="flex justify-end gap-3 mt-6">
            </div>
          </Card>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Card>
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
