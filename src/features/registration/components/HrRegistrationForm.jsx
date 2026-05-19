import React, { useEffect } from "react";
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
import {
  COMPANYINDUSTRY,
  COMPANYSIZE,
} from "@/constants/recruiterRegistrationEnums";

const HrRegistrationForm = ({ onProgressChange }) => {
  const { mutateAsync: registerHr } = useHrRegMutation();
  const { toHrProfile } = useAppNavigate();
  const {
    register,
    control,
    setError,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useCustomForm({
    defaultValues: hrRegistrationDefaultValues,
    schema: hrRegistrationSchema,
  });

  const companySummaryValue = watch("companySummary") || "";
  const companySummaryLength = companySummaryValue.length;

  const values = watch();
  useEffect(() => {
    const filled = Object.values(values).filter(Boolean).length;
    const total = Object.keys(values).length;
    onProgressChange((filled / total) * 100);
  }, [values]);

  const onSubmit = async (data) => {
    try {
      await registerHr(data);
      toHrProfile();
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
      <p className="text-xl text-[#0576D6] font-bold pb-5">
        HR/Recruiter Application Form
      </p>
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
          required
          options={COMPANYSIZE}
          error={errors.companySize?.message}
        />
        <SelectField
          {...register("companyIndustry")}
          name="companyIndustry"
          label="Company Industry"
          placeholder="Select industry"
          required
          options={COMPANYINDUSTRY}
          error={errors.companyIndustry?.message}
        />
      </div>

      <InputFieldWithLabel
        {...register("companySummary")}
        name="companySummary"
        label="Company Description"
        placeholder="Tell us about your company, culture, and what makes it a great place to work.."
        required
        bottomText={`${companySummaryLength} characters (minimum 50)`}
        fieldHeight="80"
        error={errors.companySummary?.message}
        required
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
