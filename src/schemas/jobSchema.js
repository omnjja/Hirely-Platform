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
    documentAttachment: z
      .instanceof(File)
      .refine((f) => f.size <= 2 * 1024 * 1024, "Max file size is 2MB")
      .nullable()
      .optional(),
    interviewerQuestions: z.preprocess(
      (val) =>
        Array.isArray(val) ? val.map((item) => item.value ?? item) : val,
      z.array(z.string().max(200)).min(1, "At least 1 Question is required"),
    ),
  })
  .refine((data) => data.compensationMax > data.compensationMin, {
    message: "Max salary must be greater than min salary",
    path: ["compensationMax"],
  })
  .refine((data) => data.compensationMin < data.compensationMax, {
    message: "Min salary must be less than max salary",
    path: ["compensationMin"],
  });

export const jobDefaultValues = {
  title: "",
  department: "",
  jobType: "FULL_TIME",
  location: "",
  experienceLevel: "",
  compensationMin: 15000,
  compensationMax: 40000,
  roleContext: "",
  coreResponsibilities: "",
  skills: [],
  keywords: [],
  documentAttachment: null,
  interviewerQuestions: [],
};
