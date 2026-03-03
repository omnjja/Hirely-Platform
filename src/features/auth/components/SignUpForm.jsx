import React from "react";
import PasswordField from "../../../components/ui/PasswordField";
import InputField from "../../../components/ui/InputField";
import FormHeader from "./FormHeader";
import ButtonComponent from "../../../components/ui/ButtonComponent";
import FormFooter from "./FormFooter";
import GoogleButton from "../../../components/ui/GoogleButton";
import Divider from "../../../components/ui/Divider";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ToastPromiseMessage from "../../../utils/ToastPromiseMessage";
import DateField from "../../../components/ui/DateField";

const SignupForm = () => {
  const userRegisterationSchema = z
    .object({
      // name: z.string().min(1, "Name is required"),
      email: z
        .string()
        .min(1, "Email is required")
        .email("Invalid email address"),
      password: z.string().min(8, "Password must be at least 8 characters"),
      confirmPassword: z.string().min(1, "Please confirm your password"),
      birthDate: z
        .string()
        .min(1, "Date of birth is required")
        .refine((date) => {
          const birth = new Date(date);
          const today = new Date();
          return birth <= today;
        }, "Date of birth cannot be in the future"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  // .refine((date) => {
  //   const birth = new Date(date);
  //   const today = new Date();
  //   const age = today.getFullYear() - birth.getFullYear();
  //   return age >= 18;
  // }, "You must be at least 18 years old")
  const {
    register,
    handleSubmit,
    control,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      // name: "",
      email: "",
      password: "",
      confirmPassword: "",
      birthDate: "",
    },
    resolver: zodResolver(userRegisterationSchema),
  });

  const onSubmit = async (data) => {
    const { confirmPassword, ...submitData } = data;
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate api call
      console.log("Form Data:", submitData);
      ToastPromiseMessage(Promise.resolve(), {
        loading: "Creating account... ⏳",
        success: "Account created successfully! ✅",
        error: "Failed to create account. Please try again. ❌",
      });
      reset();
    } catch (e) {
      // handle specific API errors
      if (e.code === "EMAIL_TAKEN") {
        setError("email", { message: "Email already in use" });
      } else {
        setError("root", { message: "Failed to sign up. Please try again." });
      }
    }
  };

  return (
    <div
      className="
      w-full 
      md:w-[55%] 
      mx-auto 
      bg-white 
      flex 
      justify-center 
      px-4 
      md:px-6
      mb-8 
      md:mb-0
    "
    >
      <div className="max-w-md w-full pb-1">
        <FormHeader head="Sign Up" subhead="Sign up to enjoy the features" />

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
          {/* <InputField
            {...register("name")}
            label="Name"
            error={errors.name?.message}
          /> */}
          <InputField
            {...register("email")}
            label="Email"
            error={errors.email?.message}
          />
          <PasswordField
            {...register("password")}
            label="Password"
            error={errors.password?.message}
          />
          <PasswordField
            {...register("confirmPassword")}
            label="Password Confirmation"
            error={errors.confirmPassword?.message}
          />
          <DateField
            name="birthDate"
            control={control}
            label="Date of Birth"
            error={errors.birthDate?.message}
          />
          {errors.root && (
            <p className="text-red-500 text-sm flex items-center mb-1">
              {errors.root.message || "An error occurred. Please try again."}
            </p>
          )}
          <ButtonComponent
            text={isSubmitting ? "Signing up..." : "Sign up"}
            type="submit"
            fullWidth
            disabled={isSubmitting}
          />
          <Divider label="or" />

          <GoogleButton label="Continue with Google" />

          <FormFooter
            text="Already have an account? "
            linkText="Sign in"
            destination="/login"
          />
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
