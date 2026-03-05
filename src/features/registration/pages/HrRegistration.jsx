import RegistrationLayout from "@/components/layout/RegistrationLayout";
import InputFieldWithLabel from "@/components/ui/InputFieldWithLabel";
import SelectField from "@/components/ui/SelectField";
import React from "react";
import { useForm } from "react-hook-form";

const HrRegistration = () => {
  const { control } = useForm({});

  return (
    <RegistrationLayout
      header="Register your company to start finding talent"
      subhead="HR/Recruiter Application Form"
    >
      <form className="space-y-4">
        {/* Full Name */}
        <InputFieldWithLabel
          name="fullName"
          label="Full Name"
          required
          control={control}
          placeholder="John Doe"
          rules={{ required: "Full Name is required" }}
        />

        {/* Company Name */}
        <InputFieldWithLabel
          name="companyName"
          label="Company Name"
          required
          control={control}
          placeholder="e.g., Tech Solutions Inc."
          rules={{ required: "Company Name is required" }}
        />

        {/* Job Title */}
        <InputFieldWithLabel
          name="JobTitle"
          label="Job Title"
          required
          control={control}
          placeholder="e.g., HR Manager"
          rules={{ required: "Job Title is required" }}
        />

        {/* Email + Phone Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputFieldWithLabel
            name="email"
            label="Email"
            type="email"
            required
            control={control}
            placeholder="john.doe@company.com"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            }}
          />
          <InputFieldWithLabel
            name="phoneNumber"
            label="Phone Number"
            required
            control={control}
            placeholder="+1 234 567 890"
            rules={{ required: "Phone Number is required" }}
          />
        </div>

        {/* Company Size + Industry */}
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

        {/* Company Description */}
        <InputFieldWithLabel
          name="companyDescription"
          label="Company Description"
          placeholder="Tell us about your company, culture, and what makes it a great place to work..."
          required
          control={control}
          bottomText="0 characters (minimum 50)"
          fieldHeight="80px"
        />

        {/* Company Website */}
        <InputFieldWithLabel
          name="companyWebsite"
          label="Company Website"
          type="url"
          placeholder="https://www.company.com"
          control={control}
        />
      </form>
    </RegistrationLayout>
  );
};

export default HrRegistration;
