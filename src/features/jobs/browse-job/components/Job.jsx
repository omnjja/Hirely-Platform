import React from "react";
import { Box, Grid } from "@mui/material";
import MatchPercentage from "@/components/ui/MatchPercentage";
import JobCardInfo from "./JobCardInfo";
import JobCardHeader from "./JobCardHeader";
import Actions from "./Actions";
import CompanyLogo from "./CompanyLogo";
import { formatText } from "@/utils/formatText";

const Job = ({ job }) => {
  const role = localStorage.getItem("userRole");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        className="w-full p-2"
        sx={{ alignItems: "stretch" }}
      >
        <Grid
          size={
            role === "HR"
              ? { xs: 12, sm: 12, md: 10, lg: 10 }
              : { xs: 12, sm: 12, md: 8, lg: 8 }
          }
          sx={{
            display: "flex items-center justify-center flex-nowrap flex-1",
          }}
        >
          <div className="w-full h-full flex gap-2 sm:gap-5 bg-white shadow-lg rounded-lg border p-3 sm:p-6">
            <CompanyLogo companyName={job.companyName} />
            <div className="flex flex-col gap-2 sm:gap-4 min-w-0 flex-1">
              <JobCardHeader
                id={job.id}
                createdAt={job.createdAt}
                title={job.title}
                companyName={job.companyName}
                department={job.department}
              />
              <JobCardInfo
                location={job.location}
                jobType={job.jobType}
                status={job.status}
                experienceLevel={job.experienceLevel}
                applicationCount={job.applicationCount}
              />
              <Actions id={job.id} isApplied={job.isCandidateApply} />
            </div>
          </div>
        </Grid>
        {role === "CANDIDATE" && (
          <Grid
            size={{ xs: 12, sm: 12, md: 4, lg: 4 }}
            className="hidden md:flex"
            sx={{ display: "hidden md:flex items-center justify-center" }}
          >
            <MatchPercentage
              percentage={Math.ceil(job?.matchScore * 100)}
              title={job?.title}
              subtitle={`${job?.companyName} • ${formatText(job?.workplaceType)}`}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Job;
