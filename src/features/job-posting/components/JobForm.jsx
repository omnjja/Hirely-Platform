import React, { useEffect, useMemo, useRef } from "react";
import Card from "@/components/ui/Card";
import BasicInfoSection from "./BasicInfoSection";
import JobCompensations from "./JobCompensations";
import JobDetails from "./JobDetails";
import JobSkills from "./JobSkills";
import VideoQuestions from "./VideoQuestions";
import { Box, Grid } from "@mui/material";
import JobPostHeader from "./JobPostHeader";
import { SquareChevronUp, Wrench } from "lucide-react";
import useCustomForm from "@/hooks/useCustomForm";
import { jobDefaultValues, jobSchema } from "@/schemas/jobSchema";
import { FormProvider } from "react-hook-form";
import ButtonComponent from "@/components/ui/ButtonComponent";
import { useCreateJobMutation } from "../hooks/useCreateJobMutation";
import { useUpdateJobMutation } from "../hooks/useUpdateJobMutation";
import { useNavigate } from "react-router-dom";
import ConfirmDialog from "@/components/ui/ConfirmDialog";

const JobForm = ({ mode = "post", initialValues = {} }) => {
  const navigate = useNavigate();
  const formattedInitialValues = useMemo(() => {
    return {
      ...jobDefaultValues,
      ...initialValues,
      skills: initialValues.skills || [],
      keywords: initialValues.keywords || [],
      interviewerQuestions: initialValues.interviewerQuestions || [],
    };
  }, [initialValues]);

  const methods = useCustomForm({
    defaultValues: formattedInitialValues,
    schema: jobSchema,
    mode: "onChange",
  });

  const { mutateAsync: postJob } = useCreateJobMutation();
  const { mutateAsync: updateJob } = useUpdateJobMutation();

  const didReset = useRef(false);

  useEffect(() => {
    if (initialValues && !didReset.current) {
      methods.reset(formattedInitialValues);
      didReset.current = true;
    }
  }, [formattedInitialValues]);

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      skills: data.skills.map((item) => item.value ?? item),
      keywords: data.keywords.map((item) => item.value ?? item),
      compensationMin: Number(data.compensationMin),
      compensationMax: Number(data.compensationMax),
    };
    try {
      if (mode === "edit") {
        const jobId = initialValues?.id;
        if (!jobId) {
          throw new Error("Job ID is required for edit mode.");
        }
        await updateJob(
          { id: jobId, formData: payload },
          {
            onSuccess: () => {
              setTimeout(() => navigate(-1), 1000);
            },
          },
        );
      } else {
        await postJob(payload);
        methods.reset();
      }
    } catch (error) {
      methods.setError("root", {
        type: "manual",
        message:
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong.",
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            className="w-full min-h-screen p-3 sm:p-5"
          >
            <Card className="p-4 sm:p-6">
              <JobPostHeader mode={mode} />

              <div className="mt-4 sm:mt-6">
                <BasicInfoSection />
              </div>

              <div className="mt-4 sm:mt-6">
                <Grid container spacing={2}>
                  <Grid
                    size={{ xs: 12, md: 6 }}
                    className="flex flex-col gap-4 sm:gap-6"
                  >
                    <JobCompensations />
                    <JobSkills
                      head="Required Skills"
                      name="skills"
                      placeholder="type a skill and press enter"
                      icon={<Wrench color="#2A3439" />}
                    />
                    <JobSkills
                      head="Keywords"
                      name="keywords"
                      placeholder="type a keyword and press enter"
                      icon={<SquareChevronUp color="#2A3439" />}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <JobDetails />
                  </Grid>
                </Grid>
              </div>
              {methods.formState.errors?.root && (
                <p className="text-red-500 text-sm flex items-center mb-1">
                  {methods.formState.errors.root.message ||
                    "An error occurred. Please try again."}
                </p>
              )}
              <div className="mt-4 sm:mt-6">
                <VideoQuestions />
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
                <ButtonComponent
                  type="submit"
                  fullWidth
                  disabled={methods.formState.isSubmitting}
                >
                  {mode === "edit"
                    ? methods.formState.isSubmitting
                      ? "Saving..."
                      : "Save Changes"
                    : methods.formState.isSubmitting
                      ? "Submitting..."
                      : "Submit"}
                </ButtonComponent>
              </div>
            </Card>
          </Grid>
        </Box>
      </form>
    </FormProvider>
  );
};

export default JobForm;
