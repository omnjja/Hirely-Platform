import React from "react";
import { Grid } from "@mui/material";
import InputFieldWithLabel from "@/components/ui/InputFieldWithLabel";
import Box from "@mui/material/Box";
import Card from "@/components/ui/Card";
import DocumentsPicker from "@/components/ui/DocumentsPicker";
import useCustomForm  from "@/hooks/useCustomForm";
import z from "zod";

const JobDetails = () => {
  const {
    control,
    formState: { errors },
  } = useCustomForm({
    defaultValues: {
      attachment: null,
    },
    schema: z.object({
      attachment: z
        .instanceof(File, "Please upload a valid file")
        .refine(
          (file) => file.size <= 1 * 1024 * 1024,
          "Max file size is 10MB",
        )
        .nullable(),
    }),
  });
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
              fieldHeight="160"
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <InputFieldWithLabel
              label="Core Responsibilities"
              placeholder="Bullet points of what they will achieve"
              fullWidth
              rounded="xl"
              fieldHeight="160"
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <DocumentsPicker
              name="attachment"
              control={control}
              errors={errors}
              accept=".pdf"
              maxSizeMB={1}
            />
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default JobDetails;
