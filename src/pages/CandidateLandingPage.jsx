import React from "react";
import { Box, Grid } from "@mui/material";
import Card from "@/components/ui/Card";
import CandidateLandingHero from "@/features/candidate/landing-page/components/CandidateLandingHero";
import RecomendedForYou from "@/features/candidate/landing-page/components/RecomendedForYou";
import LandingRecentJobs from "@/features/candidate/landing-page/components/LandingRecentJobs";
import TopMatchesJobs from "@/features/candidate/landing-page/components/TopMatchesJobs";

const CandidateLandingPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className="w-full min-h-screen p-3 sm:p-5">
        <Grid size={{ xs: 12, lg: 9 }}>
          <div className="flex flex-col gap-6">
            <CandidateLandingHero />

            <TopMatchesJobs />

            <RecomendedForYou />
            <LandingRecentJobs />
          </div>
        </Grid>

        {/* AI card */}
        <Grid size={{ xs: 12, lg: 3 }}>
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

export default CandidateLandingPage;
