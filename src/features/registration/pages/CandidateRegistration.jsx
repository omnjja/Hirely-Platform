import RegistrationLayout from "@/components/layout/RegistrationLayout";
import InputFieldWithLabel from "@/components/ui/InputFieldWithLabel";
import FileUploadField from "@/components/ui/FileUploadField";
import { useForm } from "react-hook-form";
import React from "react";
import AddButton from "@/components/ui/AddButton";
import UploadCVField from "@/components/ui/UploadCVField";

const CandidateRegistration = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      country: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <RegistrationLayout
      header="Complete your candidate profile to get started"
      subhead="Candidate Application Form"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputFieldWithLabel
          name="fullName"
          control={control}
          label="Full Name"
          required
          placeholder="John Doe"
          rules={{
            required: "Full Name is required",
          }}
        />
        <FileUploadField
          label="profilePicture"
          required
          onChange={(file) => console.log(file)}
        />
        <InputFieldWithLabel
          name="currentJobTitle"
          label="Current Job Title"
          placeholder="e.g., Senior Software Engineer"
          required
          control={control}
          rules={{
            required: "Current Job Title is required",
          }}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputFieldWithLabel
            name="country"
            label="Country"
            required
            control={control}
            options={[
              { value: "", label: "Select Country" },
              { value: "Eg", label: "Egypt" },
            ]}
            rules={{
              required: "Country is required",
            }}
          />
          <InputFieldWithLabel
            name="phoneNumber"
            label="Phone Number"
            placeholder="e.g., +1 234 567 8901"
            required
            control={control}
            rules={{ required: "Phone Number is required" }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputFieldWithLabel
            name="education"
            label="Education Level"
            placeholder="e.g., Bachelor's Degree"
            required
            control={control}
          />
          <InputFieldWithLabel
            name="experienceLevel"
            label="Experience Level"
            required
            control={control}
          />
        </div>
        <InputFieldWithLabel
          name="yearsOfExperience"
          label="Years of Experience (optional)"
          placeholder="e.g., 5"
          control={control}
        />
        <InputFieldWithLabel
          name="Introduction-Summary "
          label="Introduction / Summary"
          placeholder="Tell us about yourself, your experience, and what you're looking for..."
          control={control}
          required
          bottomText="0 characters (minimum 50)"
          fieldHeight="80px"
        />
        <div className="grid grid-cols-[1fr_auto] gap-4 items-center">
          <InputFieldWithLabel
            name="skills"
            label="Skills"
            required
            placeholder="e.g., React, TypeScript, Node.js"
            control={control}
            bottomText="At least one skill is required"
            bottomTextColor="#FB2C36"
          />
          <AddButton />
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-4 items-center">
          <InputFieldWithLabel
            name="languages "
            label="Languages"
            required
            placeholder="e.g., English, Spanish, Mandarin"
            control={control}
            bottomText="At least one language is required"
            bottomTextColor="#FB2C36"
          />
          <AddButton />
        </div>
        <UploadCVField
          name="cv"
          label="Import Your CV"
          required
          bottomText="Accepted formats: PDF, DOC, DOCX (Max 5MB)"
          control={control}
          rules={{ required: "CV is required" }}
        />
        <p className="text-lg font-semibold mt-2">
          Professional URLs <span className="text-red-500"> *</span>
        </p>
        <InputFieldWithLabel
          name="linkedIn"
          label="LinkedIn"
          required
          placeholder="e.g., https://www.linkedin.com/in/yourprofile"
          control={control}
        />
        <InputFieldWithLabel
          name="gitHub"
          label="GitHub"
          required
          placeholder="e.g., https://github.com/yourusername"
          control={control}
        />
      </form>
    </RegistrationLayout>
  );
};

export default CandidateRegistration;
