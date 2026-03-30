import { z } from "zod";

const phoneRegex = /^\+20\d{10}$/;

export const candidateRegistrationSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  currentJobTitle: z.string().min(1, "Current Job Title is required"),
  country: z.string().min(1, "Country is required"),
  phoneNumber: z
    .string()
    .min(1, "Phone Number is required")
    .refine(
      (val) => val.startsWith("+"),
      "Must start with country code (e.g. +201xxxxxxxxx)",
    )
    .refine(
      (val) => /^\+\d+$/.test(val),
      "Only numbers allowed after the + sign",
    )
    .refine(
      (val) => val.startsWith("+20"),
      "Unsupported country code. Use +20 for Egypt",
    )
    .refine(
      (val) => val.length === 13,
      "Phone number must be 13 digits (e.g. +201012345678)",
    )
    .refine((val) => phoneRegex.test(val), "Invalid Egyptian phone number"),
  education: z.string().min(1, "Education Level is required"),

  experienceLevel: z.string().min(1, "Experience Level is required"),
  yearsOfExperience: z
    .union([z.string().length(0), z.coerce.number().min(0).max(50)])
    .optional(),
  introductionSummary: z
    .string()
    .min(50, "Introduction must be at least 50 characters"),
  skills: z.array(z.string()).min(1, "At least one skill is required"),
  languages: z.array(z.string()).min(1, "At least one language is required"),
  linkedIn: z
    .string()
    .url("Please enter a valid URL")
    .refine(
      (val) => val.startsWith("https://www.linkedin.com"),
      "Please enter a valid LinkedIn URL",
    ),
  gitHub: z
    .string()
    .url("Please enter a valid URL")
    .refine(
      (val) => val.startsWith("https://github.com"),
      "Please enter a valid GitHub URL",
    ),
  profilePicture: z.string().optional(),
  cv: z.any()
  .refine((files) => files?.length > 0, "CV upload is required")
});

export const candidateRegistrationDefaultValues = {
  fullName: "",
  currentJobTitle: "",
  country: "",
  phoneNumber: "",
  education: "",
  experienceLevel: "",
  yearsOfExperience: "",
  introductionSummary: "",
  skills: [],
  languages: [],
  linkedIn: "",
  gitHub: "",
  profilePicture: "",
  cv: "",
};
