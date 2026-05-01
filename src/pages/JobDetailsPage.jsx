import React, { useState } from "react";
import { Box, Card, Grid } from "@mui/material";
import JobDetailsHeader from "@/features/browse-job/components/JobDetailsHeader";
import JobDetailsInfo from "@/features/browse-job/components/JobDetailsInfo";
import JobDetailsDescription from "@/features/browse-job/components/JobDetailsDescription";
import JobDetailsAbout from "@/features/browse-job/components/JobDetailsAbout";
import JobRecruiter from "@/features/browse-job/components/JobRecruiter";
import ButtonComponent from "@/components/ui/ButtonComponent";
import { ArrowRight, Bookmark, RefreshCw } from "lucide-react";
import useJobDetails from "@/features/browse-job/hooks/useJobDetails";
import ErrorComponent from "@/components/ui/ErrorComponent";
import JobDetailsSkeleton from "@/features/browse-job/components/JobDetailsSkeleton";
import { useNavigate } from "react-router-dom";
import ConfirmDialog from "@/components/ui/ConfirmDialog";
import { useDeleteJobMutation } from "@/features/job-posting/hooks/useDeleteJobMutation";

const JobDetailsPage = () => {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const { data, isLoading, isFetching, error, refetch } = useJobDetails();
  const { mutateAsync: deleteJob } = useDeleteJobMutation();

  if (isLoading) return <JobDetailsSkeleton />;
  if (error)
    return <ErrorComponent error={error.message} action={() => refetch()} />;

  const handleDelete = async () => {
    await deleteJob(data.id, {
      onSuccess: () => {
        setTimeout(() => navigate(-1), 500);
      },
    });
    setConfirmOpen(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }} className="px-3 sm:px-5 py-3 mb-5">
      <Grid container spacing={10} className="w-full min-h-screen">
        <Grid size={{ xs: 12, lg: 9 }} className="flex-1 flex flex-col gap-9 ">
          {isFetching && (
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <RefreshCw size={12} className="animate-spin" />
              Refreshing...
            </div>
          )}
          <JobDetailsHeader
            title={data.title}
            department={data.department}
            location={data.location}
          />
          <JobDetailsInfo
            jobType={data.jobType}
            minSalary={data.compensationMin}
            maxSalary={data.compensationMax}
            location={data.location}
            count={data.applicationCount}
          />
          <JobDetailsAbout about={data.roleContext} />
          <JobDetailsDescription
            coreResponsibilities={data.coreResponsibilities}
            skills={data.skills}
            experience={data.experienceLevel}
          />

          {role === "HR" ? (
            <div className="flex gap-3">
              <ButtonComponent
                onClick={() => setConfirmOpen(true)}
                style={{
                  bgColor: "#FFFFFF",
                  textColor: "#EF4444",
                  bold: true,
                  border: "1px solid #FECACA",
                  hoverBg: "#FEE2E2",
                }}
                className="shadow-sm"
              >
                Delete
              </ButtonComponent>
              <ButtonComponent onClick={() => navigate("edit")} fullWidth>
                Edit
              </ButtonComponent>
            </div>
          ) : (
            <>
              <JobRecruiter
                name={data.hrName}
                hrJobTitle={"Recruiter"}
                size={data.companySize}
                quote={data.companySummary}
              />
              <div className="flex gap-3">
                <div className="bg-[#EEF1F3] rounded-full p-3">
                  <Bookmark color="#595C5E" />
                </div>
                <ButtonComponent fullWidth>
                  <div className="flex gap-1 justify-center">
                    <p>Apply Now</p>
                    <ArrowRight />
                  </div>
                </ButtonComponent>
              </div>
            </>
          )}
        </Grid>
        {/* ai */}
        <Grid size={{ xs: 12, lg: 3 }}>
          <Card className="p-4 sm:p-5 lg:sticky lg:top-20">
            <p className="text-sm font-medium text-gray-500 mb-4 flex items-center gap-2">
              ? AI Card
            </p>
          </Card>
        </Grid>
      </Grid>
      <ConfirmDialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleDelete}
        title="Delete Job Post?"
        description="This will permanently delete the job post and all its applications. This action cannot be undone."
        confirmText="Delete"
      />
    </Box>
  );
};

export default JobDetailsPage;
