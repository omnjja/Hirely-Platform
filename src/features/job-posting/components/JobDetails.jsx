import React from "react";
import { Grid } from "@mui/material";
import InputFieldWithLabel from "@/components/ui/InputFieldWithLabel";
import Box from "@mui/material/Box";
import Card from "@/components/ui/Card";
import DocumentsPicker from "@/components/ui/DocumentsPicker";
import { useFormContext } from "react-hook-form";

const JobDetails = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Card className="border rounded-xl shadow-xs p-5">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <InputFieldWithLabel
              label="The Role & Context"
              placeholder="Describe the day-to-day impact of this role"
              fullWidth
              rounded="xl"
              fieldHeight="140"
              labelClassName="text-[#566166] tracking-wide uppercase font-semibold mb-3"
              {...register("roleContext")}
              error={errors.roleContext?.message}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <InputFieldWithLabel
              label="Core Responsibilities"
              placeholder="Bullet points of what they will achieve"
              fullWidth
              rounded="xl"
              fieldHeight="140"
              labelClassName="text-[#566166] tracking-wide uppercase font-semibold mb-3"
              {...register("coreResponsibilities")}
              error={errors.coreResponsibilities?.message}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <DocumentsPicker
              label="Document Attachment"
              labelClassName="text-[#566166] tracking-wide uppercase font-semibold mb-3"
              name="documentAttachment"
              control={control}
              errors={errors}
              accept=".pdf"
              maxSizeMB={2}
            />
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default JobDetails;
