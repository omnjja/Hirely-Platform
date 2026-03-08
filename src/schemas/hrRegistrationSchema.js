import { z } from "zod";

const phoneRegex = /^\+20\d{10}$/;

export const hrRegistrationSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  companyName: z.string().min(1, "Company Name is required"),
  jobTitle: z.string().min(1, "Job Title is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
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
  companySize: z.string().min(1, "Company Size is required"),
  industry: z
    .string()
    .min(1, "Industry is required")
    .transform((val) => val.toUpperCase()),
  companySummary: z
    .string()
    .min(50, "Company Description must be at least 50 characters"),
  companyWebsite: z.string().url("Please enter a valid URL").optional(),
});

export const hrRegistrationDefaultValues = {
  fullName: "",
  companyName: "",
  jobTitle: "",
  email: "",
  phoneNumber: "",
  companySize: "",
  industry: "",
  companySummary: "",
  companyWebsite: "",
};
