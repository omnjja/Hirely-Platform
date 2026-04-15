import { Grid } from "@mui/material";
import InputFieldWithLabel from "@/components/ui/InputFieldWithLabel";
import SelectField from "@/components/ui/SelectField";
import OptionsCard from "@/components/ui/OptionsCard";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const departments = [
  { label: "Product & Design", value: "product_design" },
  { label: "Engineering", value: "engineering" },
  { label: "Marketing", value: "marketing" },
  { label: "Sales", value: "sales" },
  { label: "HR", value: "hr" },
];

const jobTypes = [
  { label: "Full-time", value: "full_time" },
  { label: "Part-time", value: "part_time" },
  { label: "Remote", value: "remote" },
];

const experienceLevels = [
  { label: "Junior", value: "junior" },
  { label: "Mid", value: "mid" },
  { label: "Senior", value: "senior" },
  { label: "Lead", value: "lead" },
];

const BasicInfoSection = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <div className="rounded-xl shadow-xs p-5">
      <p className="text-lg font-medium mb-4 flex items-center gap-2">
        ? Basic Information
      </p>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 8 }}>
            <InputFieldWithLabel
              label="Job Title"
              placeholder="e.g. Senior Creative Director"
              fullWidth
              rounded="xl"
              variant="outlined"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <SelectField
              name="department"
              label="Department"
              placeholder="Select Department"
              fullWidth
              rounded="xl"
              variant="outlined"
              options={departments}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <OptionsCard
              label="Job Type"
              options={jobTypes}
              columns={isMobile ? 2 : jobTypes.length}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <InputFieldWithLabel
              label="Location"
              placeholder="e.g. New York, NY"
              fullWidth
              rounded="xl"
              variant="outlined"
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
              options={experienceLevels}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default BasicInfoSection;
