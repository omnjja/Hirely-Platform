import React from "react";
import { Grid } from "@mui/material";
import InputFieldWithLabel from "@/components/ui/InputFieldWithLabel";
import Box from "@mui/material/Box";
import UploadCVField from "@/components/ui/UploadCVField";
import Card from "@/components/ui/Card";

const JobDetails = () => {
  return (
    <Card className="border rounded-xl shadow-xs p-5">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 6, md: 12 }}>
            <InputFieldWithLabel
              label="The Role & Context"
              placeholder="Describe the day-to-day impact of this role"
              fullWidth
              rounded="xl"
              fieldHeight="160"
              sx={{
                "& input::placeholder, & textarea::placeholder": {
                  padding: "10px 12px",
                },
              }}
            />
          </Grid>

          <Grid size={{ xs: 6, md: 12 }}>
            <InputFieldWithLabel
              label="Core Responsibilities"
              placeholder="Bullet points of what they will achieve"
              fullWidth
              rounded="xl"
              fieldHeight="160"
              sx={{
                "& input::placeholder, & textarea::placeholder": {
                  padding: "10px 12px",
                },
              }}
            />
          </Grid>

          <Grid size={{ xs: 6, md: 12 }}>
            {/* <UploadCVField
              name="Document Attachment"
              label="Import Your CV"
              required
              bottomText="Accepted formats: PDF, DOC, DOCX (Max 5MB)"
            /> */}
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default JobDetails;
