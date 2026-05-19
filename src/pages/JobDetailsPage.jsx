import React, { useState } from "react";
import { Box, Card, Grid } from "@mui/material";
import JobDetailsHeader from "@/features/jobs/job-details/components/JobDetailsHeader";
import JobDetailsInfo from "@/features/jobs/job-details/components/JobDetailsInfo";
import JobDetailsDescription from "@/features/jobs/job-details/components/JobDetailsDescription";
import JobDetailsAbout from "@/features/jobs/job-details/components/JobDetailsAbout";
import JobRecruiter from "@/features/jobs/job-details/components/JobRecruiter";
import ButtonComponent from "@/components/ui/ButtonComponent";
import { ArrowRight, Bookmark, CheckCheck, RefreshCw } from "lucide-react";
import useJobDetails from "@/features/jobs/job-details/hooks/useJobDetails";
import ErrorComponent from "@/components/ui/ErrorComponent";
import JobDetailsSkeleton from "@/features/jobs/job-details/components/JobDetailsSkeleton";
import { useNavigate } from "react-router-dom";
import ConfirmDialog from "@/components/ui/ConfirmDialog";
import { useDeleteJobMutation } from "@/features/jobs/job-details/hooks/useDeleteJobMutation";
import { useApplyJobMutation } from "@/features/jobs/job-details/hooks/useApplyJobMutation";

const JobDetailsPage = () => {
  const role = localStorage.getItem("userRole");
  const navigate = useNavigate();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const { data, isLoading, isFetching, error, refetch } = useJobDetails();
  const { mutateAsync: deleteJob } = useDeleteJobMutation();
  const { mutateAsync: applyToJob, isPending } = useApplyJobMutation();

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
  async function handleJobApply() {
    await applyToJob(data.id);
  }
  return (
    <div className="flex flex-1 px-3 sm:px-5 py-3 mb-5">
      <div className="w-full min-h-screen">
        <div className="flex-1 flex flex-col gap-9 ">
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
                <ButtonComponent
                  fullWidth
                  onClick={() => handleJobApply()}
                  disabled={data?.isCandidateApply || isPending}
                >
                  <div className="flex gap-1 justify-center">
                    <p>
                      {isPending
                        ? "Submitting..."
                        : data?.isCandidateApply
                          ? "Applied"
                          : "Apply With Autofill"}
                    </p>
                    {isPending ? (
                      <RefreshCw className="animate-spin" size={20} />
                    ) : data?.isCandidateApply ? (
                      <CheckCheck />
                    ) : (
                      <ArrowRight />
                    )}
                  </div>
                </ButtonComponent>
              </div>
            </>
          )}
        </div>
        {/* ai */}

      </div>
      <ConfirmDialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleDelete}
        title="Delete Job Post?"
        description="This will permanently delete the job post and all its applications. This action cannot be undone."
        confirmText="Delete"
      />
    </div>
  );
};

export default JobDetailsPage;
