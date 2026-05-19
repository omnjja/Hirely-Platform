import React from "react";
import CandidateLandingHero from "@/features/candidate/landing-page/components/CandidateLandingHero";
import RecomendedForYou from "@/features/candidate/landing-page/components/RecomendedForYou";
import LandingRecentJobs from "@/features/candidate/landing-page/components/LandingRecentJobs";
import TopMatchesJobs from "@/features/candidate/landing-page/components/TopMatchesJobs";

const CandidateLandingPage = () => {
  return (
    <div
      className="flex flex-1 flex-col gap-6 w-full min-h-screen p-3 sm:p-5"
      sx={{ flexGrow: 1 }}
    >
      <CandidateLandingHero />
      <TopMatchesJobs />
      <RecomendedForYou />
      <LandingRecentJobs />
    </div>
  );
};

export default CandidateLandingPage;
