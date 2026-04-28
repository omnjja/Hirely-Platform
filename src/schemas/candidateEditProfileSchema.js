import { candidateRegistrationSchema } from "./candidateRegistrationSchema";
import { z } from "zod";

export const candidateEditProfileSchema = candidateRegistrationSchema
  .partial()
  .extend({
    skills: z
      .array(z.object({ value: z.string() }))
      .min(1, "At least one skill is required")
      .optional(),

    languages: z
      .array(z.object({ value: z.string() }))
      .min(1, "At least one language is required")
      .optional(),

    cv: z.any().optional(),

    profilePicture: z.any().optional().nullable(),

    educations: z
      .array(
        z.object({
          id: z.string().optional(),
          institution: z.string().min(1, "Institution is required"),
          degree: z.string().min(1, "Degree is required"),
          fieldOfStudy: z.string().min(1, "Field of study is required"),
          startDate: z.string().min(1, "Start date is required"),
          endDate: z.string().min(1, "End date is required"),
          description: z.string().min(1, "description is required"),
        }),
      )
      .optional(),

    experiences: z
      .array(
        z.object({
          id: z.string().optional(),
          jobTitle: z.string().min(1, "Job title is required"),
          companyName: z.string().min(1, "Company is required"),
          location: z.string().optional(),
          startDate: z.string().min(1, "Start date is required"),
          endDate: z.string().min(1, "End date is required"),
          description: z.string().min(1, "description is required"),
          isCurrent: z.boolean().optional(),
        }),
      )
      .optional(),

    equalEmployment: z
      .object({
        gender: z.string().optional(),
        raceOrEthnicity: z.string().optional(),
        veteranStatus: z.string().optional(),
        disabilityStatus: z.string().optional(),
      })
      .optional(),
  });

export const candidateEditDefaultValues = {
  fullName: "",
  currentJobTitle: "",
  country: "",
  mobileNumber: "",
  education: "",
  experienceLevel: "",
  yearsOfExperience: "",
  profileSummary: "",
  skills: [],
  languages: [],
  linkedIn: "",
  gitHub: "",
  profilePicture: "",
  cv: "",
  educations: [],
  experiences: [],
  equalEmployment: {},
};
