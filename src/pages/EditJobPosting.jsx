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
    <div className="flex flex-1 w-full min-h-screen p-3 sm:p-5">
      <JobForm mode="edit" initialValues={formattedData} />
    </div>
  );
};

export default EditJobPosting;
