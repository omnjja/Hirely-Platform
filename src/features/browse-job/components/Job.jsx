import React from "react";
import {
  Ellipsis,
  MapPin,
  Clock,
  Users,
  Briefcase,
  Sparkles,
  Heart,
} from "lucide-react";
import ButtonComponent from "@/components/ui/ButtonComponent";
import { Box, Grid } from "@mui/material";
import MatchPercentage from "@/components/ui/MatchPercentage";
import JobCardInfo from "./JobCardInfo";
import JobCardHeader from "./JobCardHeader";
import Actions from "./Actions";
import CompanyLogo from "./CompanyLogo";

const Job = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        className="w-full p-2 sm:p-2"
        sx={{ alignItems: "stretch" }}
      >
        <Grid
          size={{ xs: 12, lg: 8 }}
          sx={{ display: "flex items-center justify-center" }}
        >
          <div className="w-full flex gap-2 sm:gap-5 bg-white shadow-lg rounded-lg border p-3 sm:p-6">
            <CompanyLogo />

            <div className="flex flex-col gap-2 sm:gap-4 min-w-0 flex-1">

              <JobCardHeader
              // badge="Be an early applicant"
              // title="Junior Graphic Designer"
              // subtitle="Dealer eProcess / Advertising · Marketing"
              // postedAt="9h ago"
              />

              <JobCardInfo
              // location="Cairo, Egypt"
              // jobType="Full Time"
              // workStyle="Hybrid"
              // level="New grad, Entry Level"
              // applicants="Less than 25 applicants"
              />

              <Actions />
            </div>
          </div>
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }} sx={{ display: "flex" }}>
          <MatchPercentage />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Job;
