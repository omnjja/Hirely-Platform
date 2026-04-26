import { z } from "zod";
const COMPANY_INDUSTRY = ["TECHNOLOGY", "HEALTHCARE", "FINANCE"];
const COMPANY_SIZE = ["1-10", "11-50", "51-200", "201-1000", "1000+"];
export const hrRegistrationSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  companyName: z.string().min(1, "Company Name is required"),
  jobTitle: z.string().min(1, "Job Title is required"),
  phoneNumber: z
    .string()
    .min(1, "Phone Number is required")
    .refine((val) => val.startsWith("+"), "Must start with country code")
    .refine((val) => /^\+\d+$/.test(val), "Invalid phone number")
    .refine((val) => val.length === 13, "Phone number must be 13 digits"),
  companySize: z.enum(COMPANY_SIZE, {
    errorMap: () => {
      "Company Size is required";
    },
  }),
  companyIndustry: z.enum(COMPANY_INDUSTRY, {
    errorMap: () => {
      "Company Industry is required";
    },
  }),
  companySummary: z
    .string()
    .min(50, "Company Description must be at least 50 characters"),
  // companyWebsite: z.string().url("Please enter a valid URL").optional(),
});

export const hrRegistrationDefaultValues = {
  fullName: "",
  companyName: "",
  jobTitle: "",
  phoneNumber: "",
  companySize: "",
  companyIndustry: "",
  companySummary: "",
  companyWebsite: "",
};
