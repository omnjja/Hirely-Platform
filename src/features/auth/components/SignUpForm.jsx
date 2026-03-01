import React from "react";
import { useNavigate } from "react-router-dom";
import PasswordField from "../../../components/ui/PasswordField";
import SelectField from "../../../components/ui/SelectField";
import InputField from "../../../components/ui/InputField";
import FormHeader from "./FormHeader";
import ButtonComponent from "../../../components/ui/ButtonComponent";
import FormFooter from "./FormFooter";
import GoogleButton from "../../../components/ui/GoogleButton";
import Divider from "../../../components/ui/Divider";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SignupForm = () => {
  const schema = z
    .object({
      name: z.string().min(1, "Name is required"),
      email: z
        .string()
        .min(1, "Email is required")
        .email("Invalid email address"),
      password: z.string().min(8, "Password must be at least 8 characters"),
      confirmPassword: z.string().min(1, "Confirm Password is required"),
      role: z.string().min(1, "Role is required"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
    });
  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate api call
      console.log(data);
      throw new Error("Failed to sign up");
    } catch (error) {
      setError("root", { message: "Failed to sign up. Please try again." });
    }
  };

  const navigate = useNavigate();

  const options = [
    { value: "employer", label: "Employer" },
    { value: "job_seeker", label: "Job Seeker" },
  ];

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
          <InputField
            {...register("name")}
            label="Name"
            name={"name"}
            error={errors.name?.message}
          />
          <InputField
            {...register("email")}
            label="Email"
            name={"email"}
            error={errors.email?.message}
          />
          <PasswordField
            {...register("password")}
            label="Password"
            name={"password"}
            error={errors.password?.message}
          />
          <PasswordField
            {...register("confirmPassword")}
            label="Password Confirmation"
            name={"confirmPassword"}
            error={errors.confirmPassword?.message}
          />
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <SelectField
                {...field}
                label="Role"
                options={options}
                error={errors.role?.message}
                // value={field.value || ""} // ensure value is never undefined
              />
            )}
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
