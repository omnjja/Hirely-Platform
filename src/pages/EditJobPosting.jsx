import React from "react";
import Card from "@/components/ui/Card";
import JobForm from "@/features/jobs/job-posting/components/JobForm";
import useJobDetails from "@/features/jobs/job-details/hooks/useJobDetails";
import { Box, Grid } from "@mui/material";
import JobDetailsSkeleton from "@/features/jobs/job-details/components/JobDetailsSkeleton";
import ErrorComponent from "@/components/ui/ErrorComponent";

const EditJobPosting = () => {
  const { data: jobData, isLoading, refetch, error } = useJobDetails();

  if (isLoading) {
    return <JobDetailsSkeleton />;
  }

  if (error) {
    return (
      <ErrorComponent
        error={
          error?.response?.data?.message ||
          "Unable to fetch the job details. Please try again."
        }
        action={refetch()}
      />
    );
  }

  const formattedData = jobData
    ? {
        id: jobData.id,
        title: jobData.title,
        department: jobData.department,
        jobType: jobData.jobType,
        location: jobData.location,
        experienceLevel: jobData.experienceLevel,
        compensationMin: jobData.compensationMin,
        compensationMax: jobData.compensationMax,
        roleContext: jobData.roleContext,
        coreResponsibilities: jobData.coreResponsibilities,
        skills: (jobData.skills || []).map((skill) =>
          typeof skill === "string" ? { value: skill } : skill,
        ),
        keywords: (jobData.keywords || []).map((keyword) =>
          typeof keyword === "string" ? { value: keyword } : keyword,
        ),
        documentAttachment: jobData.documentAttachment || null,
        interviewerQuestions: jobData.interviewerQuestions || [],
      }
    : {};

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className="w-full min-h-screen p-3 sm:p-5">
        <Grid size={{ xs: 12, lg: 10 }}>
          <JobForm mode="edit" initialValues={formattedData} />
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

export default EditJobPosting;
