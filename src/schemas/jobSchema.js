import { z } from "zod";

const baseJobSchema = z.object({
  title: z.string().min(1, "Job title is required").max(200),
  department: z.string().min(1, "Department is required").max(120),
  jobType: z.string().min(1, "Job type is required"),
  location: z.string().min(1, "Location is required").max(200),
  workplaceType: z.string().min(1, "Workplace type is required"),
  experienceLevel: z.string().min(1, "Experience level is required"),
  roleContext: z.string().min(1, "Role context is required").max(5000),
  coreResponsibilities: z
    .string()
    .min(1, "Role responsibilities are required")
    .max(8000),
  skills: z.preprocess(
    (val) => (Array.isArray(val) ? val.map((item) => item.value ?? item) : val),
    z.array(z.string().max(80)).min(1, "At least 1 skill is required"),
  ),
  keywords: z.preprocess(
    (val) => (Array.isArray(val) ? val.map((item) => item.value ?? item) : val),
    z.array(z.string().max(80)).min(1, "At least 1 keyword is required"),
  ),
  interviewerQuestions: z.preprocess(
    (val) => (Array.isArray(val) ? val.map((item) => item.value ?? item) : val),
    z.array(z.string().max(200)).min(1, "At least 1 Question is required"),
  ),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  sprintDuration: z.coerce
    .number({ invalid_type_error: "Must be a number" })
    .min(1, "Sprint duration must be at least 1 week")
    .max(12, "Sprint duration cannot exceed 12 weeks"),
});

export const jobSchema = baseJobSchema
  .refine((data) => data.endDate > data.startDate, {
    message: "End date must be after start date",
    path: ["endDate"],
  })
  .refine(
    (data) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const startDate = new Date(data.startDate);
      startDate.setHours(0, 0, 0, 0);

      return startDate >= today;
    },
    {
      message: "Start date must be today or in the future",
      path: ["startDate"],
    },
  );

export const editJobSchema = baseJobSchema.refine(
  (data) => data.endDate > data.startDate,
  {
    message: "End date must be after start date",
    path: ["endDate"],
  },
);

export const jobDefaultValues = {
  title: "",
  department: "",
  jobType: "FULL_TIME",
  location: "",
  workplaceType: "ONSITE",
  experienceLevel: "",
  roleContext: "",
  coreResponsibilities: "",
  skills: [],
  keywords: [],
  interviewerQuestions: [],
  startDate: "",
  endDate: "",
  sprintDuration: null,
};
