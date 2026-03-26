import React from "react";
import InputFieldWithLabel from "@/components/ui/InputFieldWithLabel";
import SelectField from "@/components/ui/SelectField";
import {
  hrRegistrationDefaultValues,
  hrRegistrationSchema,
} from "@/schemas/hrRegistrationSchema";
import ButtonComponent from "@/components/ui/ButtonComponent";
import useHrRegMutation from "../hooks/useHrRegMutation";
import useCustomForm from "@/hooks/useCustomForm";

const HrRegistrationForm = () => {
  const { mutateAsync: registerHr } = useHrRegMutation();

  const {
    register,
    control,
    setError,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useCustomForm({
    defaultValues: hrRegistrationDefaultValues,
    schema: hrRegistrationSchema,
  });

  const onSubmit = async (data) => {
    const { email, ...payload } = data;
    console.log("HR Registration Data:", payload);
    try {
      await registerHr(payload);
      reset();
    } catch (error) {
      setError("root", {
        message:
          error.response?.data?.message ||
          "An error occurred. Please try again.",
      });
      console.log("register error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <InputFieldWithLabel
        {...register("fullName")}
        name="fullName"
        label="Full Name"
        error={errors.fullName?.message}
        required
        placeholder="John Doe"
      />
      <InputFieldWithLabel
        {...register("companyName")}
        name="companyName"
        label="Company Name"
        required
        placeholder="e.g., Tech Solutions Inc."
        error={errors.companyName?.message}
      />
      <InputFieldWithLabel
        {...register("jobTitle")}
        name="jobTitle"
        label="Job Title"
        required
        control={control}
        placeholder="e.g., HR Manager"
        error={errors.jobTitle?.message}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputFieldWithLabel
          {...register("email")}
          name="email"
          label="Email"
          required
          placeholder="john.doe@company.com"
          error={errors.email?.message}
        />
        <InputFieldWithLabel
          {...register("phoneNumber")}
          name="phoneNumber"
          label="Phone Number"
          required
          placeholder="+1 234 567 890"
          error={errors.phoneNumber?.message}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SelectField
          name="companySize"
          label="Company Size"
          placeholder="Select company size"
          control={control}
          required
          options={[
            { value: "1-50", label: "1-50 employees" },
            { value: "51-200", label: "51-200 employees" },
            { value: "201-500", label: "201-500 employees" },
            { value: "501-1000", label: "501-1000 employees" },
            { value: "1000+", label: "1000+ employees" },
          ]}
        />
        <SelectField
          name="industry"
          label="Industry"
          placeholder="Select industry"
          control={control}
          required
          options={[
            { value: "technology", label: "Technology" },
            { value: "finance", label: "Finance" },
            { value: "healthcare", label: "Healthcare" },
            { value: "education", label: "Education" },
            { value: "retail", label: "Retail" },
          ]}
        />
      </div>

      <InputFieldWithLabel
        {...register("companySummary")}
        name="companySummary"
        label="Company Description"
        placeholder="Tell us about your company, culture, and what makes it a great place to work..."
        required
        bottomText="0 characters (minimum 50)"
        fieldHeight="80px"
        error={errors.companySummary?.message}
      />

      <InputFieldWithLabel
        {...register("companyWebsite")}
        name="companyWebsite"
        label="Company Website"
        placeholder="https://www.company.com"
        error={errors.companyWebsite?.message}
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
    </form>
    // </div>
  );
};

export default HrRegistrationForm;
