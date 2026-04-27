import React from "react";
import { Box, Card, Grid } from "@mui/material";
import JobDetailsHeader from "@/features/browse-job/components/JobDetailsHeader";
import JobDetailsInfo from "@/features/browse-job/components/JobDetailsInfo";
import JobDetailsDescription from "@/features/browse-job/components/JobDetailsDescription";
import JobDetailsAbout from "@/features/browse-job/components/JobDetailsAbout";
import JobRecruiter from "@/features/browse-job/components/JobRecruiter";
import ButtonComponent from "@/components/ui/ButtonComponent";
import { ArrowRight, Bookmark } from "lucide-react";

const JobDetailsPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="px-3 sm:px-5 py-3 mb-5">
      <Grid container spacing={10} className="w-full min-h-screen">
        <Grid size={{ xs: 12, lg: 9 }} className="flex-1 flex flex-col gap-9 ">
          <JobDetailsHeader />
          <JobDetailsInfo />
          <JobDetailsAbout />
          <JobDetailsDescription />
          <JobRecruiter
            company={{
              name: "Muhamed Ahmed",
              tagline: "Empowering the next generation of AI collaboration.",
              size: "5k+ Employees",
              stage: "Series D",
              quote:
                "We believe that the future of work is not AI replacing humans, but AI augmenting human brilliance. Join us in shaping this future.",
            }}
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
    </Box>
  );
};

export default JobDetailsPage;
