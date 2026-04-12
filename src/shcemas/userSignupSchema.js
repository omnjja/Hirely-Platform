import { z } from "zod";

const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;
const MIN_AGE = 16;

export const userSignupSchema = z
  .object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        PASS_REGEX,
        "Password must contain uppercase, lowercase, number, and special character",
      ),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    dateOfBirth: z
      .string()
      .min(1, "Date of birth is required")
      .refine((date) => {
        const birth = new Date(date);
        const today = new Date();
        return birth <= today;
      }, "Date of birth cannot be in the future")
      .refine((date) => {
        const birth = new Date(date);
        const today = new Date();
        let age = today.getFullYear() - birth.getFullYear();
        const m = today.getMonth() - birth.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
          age--;
        }
        return age >= MIN_AGE;
      }, `You must be at least ${MIN_AGE} years old`),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const userSignupDefaultValues = {
  email: "",
  password: "",
  confirmPassword: "",
  dateOfBirth: "",
};
