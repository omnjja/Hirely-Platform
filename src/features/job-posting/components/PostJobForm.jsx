import React from "react";
import Card from "@/components/ui/Card";
import BasicInfoSection from "./BasicInfoSection";
import JobCompensations from "./JobCompensations";
import JobDetails from "./JobDetails";
import JobSkills from "./JobSkills";
import VideoQuestions from "./VideoQuestions";
import { Box, Grid } from "@mui/material";
import JobPostHeader from "./JobPostHeader";
import { SquareChevronUp, Wrench } from "lucide-react";
import useCustomForm from "@/hooks/useCustomForm";
import { jobDefaultValues, jobSchema } from "@/schemas/jobSchema";
import { FormProvider } from "react-hook-form";
import ButtonComponent from "@/components/ui/ButtonComponent";

const PostJobForm = () => {
  const methods = useCustomForm({
    defaultValues: jobDefaultValues,
    schema: jobSchema,
    mode: onchange,
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            className="w-full min-h-screen p-3 sm:p-5"
          >
            {/* Main Content */}
            <Grid size={{ xs: 12, lg: 10 }}>
              <Card className="p-4 sm:p-6">
                {/* Header */}
                <JobPostHeader />

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
                      <JobSkills
                        head="Required Skills"
                        name="job_skills"
                        placeholder="type a skill and press enter"
                        icon={<Wrench color="#2A3439" />}
                      />
                      <JobSkills
                        head="Keywords"
                        name="keywords"
                        placeholder="type a keyword and press enter"
                        icon={<SquareChevronUp color="#2A3439" />}
                      />
                    </Grid>

                    {/* right */}
                    <Grid size={{ xs: 12, md: 6 }}>
                      <JobDetails />
                    </Grid>
                  </Grid>
                </div>

                {/* actions */}
                <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
                    <ButtonComponent
                      text={methods.isSubmitting ? "Submitting..." : "Submit"}
                      type="submit"
                      fullWidth
                      disabled={methods.isSubmitting}
                    />
                </div>
              </Card>

              {/* Video Questions */}
              <div className="mt-4 sm:mt-6">
                <VideoQuestions />
              </div>
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
      </form>
    </FormProvider>
  );
};

export default PostJobForm;
