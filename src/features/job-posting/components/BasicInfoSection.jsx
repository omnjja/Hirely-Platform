import { Grid } from "@mui/material";
import InputFieldWithLabel from "@/components/ui/InputFieldWithLabel";
import SelectField from "@/components/ui/SelectField";
import { useState } from "react";
import OptionsCard from "@/components/ui/OptionsCard";
import Card from "@/components/ui/Card";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

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
  const [gender, setGender] = useState("");
  return (
    <div className="rounded-xl shadow-xs p-5">
      <p className="text-lg font-medium mb-4 flex items-center gap-2">
        ? Basic Information
      </p>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 6, md: 8 }}>
            <InputFieldWithLabel
              label="Job Title"
              placeholder="e.g. Senior Creative Director"
              fullWidth
              rounded="xl"
              variant="outlined"
            />
          </Grid>

          <Grid size={{ xs: 6, md: 4 }}>
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

          <Grid size={{ xs: 6, md: 4 }}>
            <OptionsCard
              label="Job Type"
              options={jobTypes}
              value={gender}
              onChange={setGender}
              columns={jobTypes.length}
            />
          </Grid>

          <Grid size={{ xs: 6, md: 4 }}>
            <InputFieldWithLabel
              label="Location"
              placeholder="e.g. New York, NY"
              fullWidth
              rounded="xl"
              variant="outlined"
            />
          </Grid>

          <Grid size={{ xs: 6, md: 4 }}>
            <SelectField
              name="experienceLevel"
              label="Experience Level"
              placeholder="Select Experience Level"
              fullWidth
              rounded="xl"
              options={experienceLevels}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default BasicInfoSection;
