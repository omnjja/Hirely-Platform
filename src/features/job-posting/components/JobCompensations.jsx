import React from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import PaymentsIcon from "@mui/icons-material/Payments";
import InputFieldWithLabel from "@/components/ui/InputFieldWithLabel";
import CustomizedSlider from "@/components/ui/CustomizedSlider";
import IconWrapper from "@/components/ui/IconWrapper";
import { useFormContext } from "react-hook-form";

const MIN = 1000;
const MAX = 50000;
const STEP = 1000;

function fmt(v) {
  return "$" + v.toLocaleString();
}

const JobCompensations = () => {
  const {
    register,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const minVal = watch("compensationMin");
  const maxVal = watch("compensationMax");

  return (
    <div className="rounded-xl shadow-xs p-5">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} className="flex items-center gap-3">
            <IconWrapper className="bg-[#D5E3FC]">
              <PaymentsIcon sx={{ color: "#575F75" }} />
            </IconWrapper>
            <p className="text-sm sm:text-[20px] text-[#2A3439] mb-2 font-semibold  ">
              Compensation
            </p>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <InputFieldWithLabel
              type="number"
              label="Minimum Salary"
              placeholder="e.g., 50000"
              rounded="xl"
              fullWidth
              variant="outlined"
              labelClassName="text-[#566166] uppercase font-bold"
              {...register("compensationMin", {
                valueAsNumber: true,
                min: { value: MIN, message: `Min is ${fmt(MIN)}` },
                max: { value: MAX - STEP, message: "Must be less than max" },
              })}
              error={errors.compensationMin?.message}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <InputFieldWithLabel
              type="number"
              label="Maximum Salary"
              placeholder="e.g., 70000"
              rounded="xl"
              fullWidth
              variant="outlined"
              labelClassName="text-[#566166] uppercase font-bold"
              {...register("compensationMax", {
                valueAsNumber: true,
                min: { value: MIN + STEP, message: "Must be greater than min" },
                max: { value: MAX, message: `Max is ${fmt(MAX)}` },
              })}
              error={errors.compensationMax?.message}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <CustomizedSlider
              control={control}
              minVal={minVal}
              maxVal={maxVal}
              setValue={setValue}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default JobCompensations;
