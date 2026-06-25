import { z } from "zod";
export const jobSchema = z
  .object({
    title: z.string().min(1, "Job title is required").max(200),
    department: z.string().min(1, "Department is required").max(120),
    jobType: z.string().min(1, "Job type is required"),
    location: z.string().min(1, "Location is required").max(200),
    experienceLevel: z.string().min(1, "Experience level is required"),
    compensationMin: z.coerce
      .number({ invalid_type_error: "Must be a number" })
      .min(0, "Must be positive"),
    compensationMax: z.coerce
      .number({ invalid_type_error: "Must be a number" })
      .min(0, "Must be positive"),
    roleContext: z.string().min(1, "Role context is required").max(5000),
    coreResponsibilities: z
      .string()
      .min(1, "Role responsibilities are required")
      .max(8000),
    skills: z.preprocess(
      (val) =>
        Array.isArray(val) ? val.map((item) => item.value ?? item) : val,
      z.array(z.string().max(80)).min(1, "At least 1 skill is required"),
    ),
    keywords: z.preprocess(
      (val) =>
        Array.isArray(val) ? val.map((item) => item.value ?? item) : val,
      z.array(z.string().max(80)).min(1, "At least 1 keyword is required"),
    ),
    interviewerQuestions: z.preprocess(
      (val) =>
        Array.isArray(val) ? val.map((item) => item.value ?? item) : val,
      z.array(z.string().max(200)).min(1, "At least 1 Question is required"),
    ),
    startDate: z.string().min(1, "Start date is required"),
    endDate: z.string().min(1, "End date is required"),
    sprintDuration: z.coerce
      .number({ invalid_type_error: "Must be a number" })
      .min(1, "Sprint duration must be at least 1 week")
      .max(12, "Sprint duration cannot exceed 12 weeks"),
  })
  .refine((data) => data.compensationMax > data.compensationMin, {
    message: "Max salary must be greater than min salary",
    path: ["compensationMax"],
  })
  .refine((data) => data.compensationMin < data.compensationMax, {
    message: "Min salary must be less than max salary",
    path: ["compensationMin"],
  })
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

export const jobDefaultValues = {
  title: "",
  department: "",
  jobType: "FULL_TIME",
  location: "",
  experienceLevel: "",
  compensationMin: 10000,
  compensationMax: 15000,
  roleContext: "",
  coreResponsibilities: "",
  skills: [],
  keywords: [],
  interviewerQuestions: [],
  startDate: "",
  endDate: "",
  sprintDuration: null,
};
