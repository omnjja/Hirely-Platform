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
import useAppNavigate from "@/hooks/useAppNavigate";

const HrRegistrationForm = () => {
  const { mutateAsync: registerHr } = useHrRegMutation();
  const { toHome } = useAppNavigate();
  const {
    register,
    control,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useCustomForm({
    defaultValues: hrRegistrationDefaultValues,
    schema: hrRegistrationSchema,
  });

  const onSubmit = async (data) => {
    try {
      await registerHr(data);
      toHome();
    } catch (error) {
      setError("root", {
        message:
          error.response?.data?.message ||
          "An error occurred. Please try again.",
      });
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputFieldWithLabel
          {...register("jobTitle")}
          name="jobTitle"
          label="Job Title"
          required
          control={control}
          placeholder="e.g., HR Manager"
          error={errors.jobTitle?.message}
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
          {...register("companySize")}
          name="companySize"
          label="Company Size"
          placeholder="Select company size"
          // control={control}
          required
          options={[
            { value: "1-10", label: "1-10 employees" },
            { value: "11-50", label: "11-50 employees" },
            { value: "51-200", label: "51-200 employees" },
            { value: "201-1000", label: "201-1000 employees" },
            { value: "1000+", label: "1000+ employees" },
          ]}
        />
        <SelectField
          {...register("companyIndustry")}
          name="companyIndustry"
          label="Company Industry"
          placeholder="Select industry"
          // control={control}
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
        text={isSubmitting ? "Submit Application..." : "Submit Application"}
        type="submit"
        fullWidth
        disabled={isSubmitting}
      />
    </form>
  );
};

export default HrRegistrationForm;
