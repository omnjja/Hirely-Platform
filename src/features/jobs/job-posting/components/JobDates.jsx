import React from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import InputFieldWithLabel from "@/components/ui/InputFieldWithLabel";
import { useFormContext } from "react-hook-form";
import DateField from "@/components/ui/DateField";

const JobDates = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="rounded-xl shadow-xs p-5">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 6 }}>
            <DateField
              name="startDate"
              label="Start Date"
              hasLabel={true}
              error={errors.startDate?.message}
              control={control}
              rounded="20px"
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <DateField
              name="endDate"
              label="End Date"
              rounded="20px"
              hasLabel={true}
              control={control}
              error={errors.endDate?.message}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <InputFieldWithLabel
              type="number"
              label="Sprint Duration (weeks)"
              placeholder="e.g., 1-12"
              rounded="xl"
              fullWidth
              variant="outlined"
              labelClassName="text-[#566166] uppercase font-bold"
              {...register("sprintDuration")}
              error={errors.sprintDuration?.message}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default JobDates;
