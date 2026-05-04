import { Grid } from "@mui/material";
import InputFieldWithLabel from "@/components/ui/InputFieldWithLabel";
import SelectField from "@/components/ui/SelectField";
import OptionsCard from "@/components/ui/OptionsCard";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { EXPERIENCE_LEVELS, JOB_TYPES } from "@/constants/jobEnums";
import { Briefcase } from "lucide-react";
import { useFormContext } from "react-hook-form";
import basicInfoImg from "@/assets/basicInfo.webp"

const BasicInfoSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <div className="rounded-xl shadow-xs p-5">
      <div className="text-sm sm:text-[20px] font-semibold mb-6 flex items-center gap-2.5 text-[#2A3439] ">
        <div className="w-10 h-10 overflow-hidden">
          <img src={basicInfoImg} className=" w-full h-full" />
        </div>
        Basic Information
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid size={{ xs: 12, md: 4 }}>
            <InputFieldWithLabel
              label="Job Title"
              placeholder="e.g. Senior Software Engineer"
              fullWidth
              rounded="xl"
              variant="outlined"
              labelClassName="text-[#566166] uppercase tracking-wider"
              {...register("title")}
              error={errors.title?.message}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <InputFieldWithLabel
              label="Department"
              placeholder="e.g. Engineering"
              fullWidth
              rounded="xl"
              variant="outlined"
              labelClassName="text-[#566166] uppercase tracking-wider"
              {...register("department")}
              error={errors.department?.message}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <InputFieldWithLabel
              label="Location"
              placeholder="e.g. Cairo, Egypt (Remote)"
              fullWidth
              rounded="xl"
              variant="outlined"
              labelClassName="text-[#566166] uppercase tracking-wider"
              {...register("location")}
              error={errors.location?.message}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} className="w-full">
            <OptionsCard
              name="jobType"
              label="Job Type"
              options={JOB_TYPES}
              columns={isMobile ? 2 : JOB_TYPES.length}
              labelClassName="text-[#566166] uppercase tracking-wider"
              {...register("jobType")}
              error={errors.jobType?.message}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <SelectField
              name="experienceLevel"
              label="Experience Level"
              placeholder="Select Experience Level"
              fullWidth
              rounded="xl"
              variant="outlined"
              options={EXPERIENCE_LEVELS}
              labelClassName="text-[#566166] uppercase line-wider tracking-wider"
              {...register("experienceLevel")}
              error={errors.experienceLevel?.message}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default BasicInfoSection;
