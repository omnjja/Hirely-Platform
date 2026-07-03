import React from "react";
import { Box, Grid } from "@mui/material";
import Card from "../ui/Card";
import { Outlet } from "react-router-dom";

const WithAICard = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="w-full min-h-screen">
      <Grid container spacing={10} className="w-full min-h-screen">
        <Grid size={{ xs: 12, lg: 9 }} className="flex-1 flex flex-col gap-9 ">
          <div>
            <Outlet />
          </div>
        </Grid>
        {/* AI Card */}
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

export default WithAICard;
