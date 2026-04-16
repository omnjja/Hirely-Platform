import { z } from "zod";

export const jobSchema = z
  .object({
    title: z.string().min(1, "Job title is required"),
    department: z.string().min(1, "Department is required"),
    jobType: z.string().min(1, "Job type is required"),
    other: z.string().min(1,"Job type is required"),
    location: z.string().min(1, "Location is required"),
    experienceLevel: z.string().min(1, "Experience level is required"),
    compensationMin: z.coerce
      .number({ invalid_type_error: "Must be a number" })
      .positive("Minimum compensation is required"),

    compensationMax: z.coerce
      .number({ invalid_type_error: "Must be a number" })
      .positive("Maximum compensation is required"),
    roleContext: z.string().min(1, "Role context is required"),
    roleResponsibilities: z
      .string()
      .min(1, "Role responsibilities are required"),
    job_skills: z.array(z.string()).min(1, "At least one skill is required"),
    keywords: z.array(z.string()).min(1, "At least one keyword is required"),
    documentAttachment: z
      .instanceof(File)
      .refine((f) => f.size <= 5 * 1024 * 1024, "Max file size is 5MB")
      .nullable()
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.jobType === "other" && !data.other?.trim()) {
      ctx.addIssue({
        path: ["other"],
        code: z.ZodIssueCode.custom,
        message: "Please specify the job type",
      });
    }
  })
  .refine((data) => data.compensationMax >= data.compensationMin, {
    message: "Max must be ≥ min compensation",
    path: ["compensationMax"],
  });

export const jobDefaultValues = {
  title: "",
  department: "",
  jobType: "",
  other: "",
  location: "",
  experienceLevel: "",
  compensationMin: 0,
  compensationMax: 0,
  roleContext: "",
  roleResponsibilities: "",
  job_skills: [],
  keywords: [],
  documentAttachment: null,
};
