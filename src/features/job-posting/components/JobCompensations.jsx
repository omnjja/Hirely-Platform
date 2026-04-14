import React from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import InputFieldWithLabel from "@/components/ui/InputFieldWithLabel";
// import Slider from "@mui/material/Slider";
import CustomizedSlider from "@/components/ui/CustomizedSlider";

const JobCompensations = () => {
  return (
    <div className="rounded-xl shadow-xs p-5">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 6, md: 12 }}>
            <p className="text-lg font-medium mb-2">? Compensation</p>
          </Grid>
          <Grid size={{ xs: 6, md: 6 }}>
            <InputFieldWithLabel
              type="number"
              label="Minimum Salary"
              placeholder="e.g., 50000"
              rounded="xl"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid size={{ xs: 6, md: 6 }}>
            <InputFieldWithLabel
              type="number"
              label="Maximum Salary"
              placeholder="e.g., 70000"
              rounded="xl"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid size={{ xs: 6, md: 12 }}>
            <CustomizedSlider />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default JobCompensations;
