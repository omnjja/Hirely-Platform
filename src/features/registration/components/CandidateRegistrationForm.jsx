import React, { useState } from "react";
import InputFieldWithLabel from "@/components/ui/InputFieldWithLabel";
import SelectField from "@/components/ui/SelectField";
import {
  candidateRegistrationDefaultValues,
  candidateRegistrationSchema,
} from "@/schemas/candidateRegistrationSchema";
import AddButton from "@/components/ui/AddButton";
import UploadCVField from "@/components/ui/UploadCVField";
import UploadProfilePictureField from "@/components/ui/UploadProfilePictureField";
import { countryOptions } from "@/constants/countryOptions";
import useCandidateRegMutation from "../hooks/useCandidateRegMutation";
import useCustomForm from "@/hooks/useCustomForm";
import { useRegistrationUpload } from "../hooks/useRegisterationUpload";
import ButtonComponent from "@/components/ui/ButtonComponent";

const CandidateRegistrationForm = () => {
  const { mutateAsync: registerCandidate } = useCandidateRegMutation(); // send all data to registerCandidate
  const { handleImageUpload, handleCVUpload } = useRegistrationUpload();

  const {
    register,
    setError,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useCustomForm({
    defaultValues: candidateRegistrationDefaultValues,
    schema: candidateRegistrationSchema,
  });

  const [profilePicture, setProfilePicture] = useState(null);
  const [cvFile, setCvFile] = useState(null);

  const onSubmit = async (data) => {
    try {
      let profilePictureKey = null;
      let cvKey = null;
      if (profilePicture) {
        const { key } = await handleImageUpload(profilePicture);
        profilePictureKey = key;
      }
      if (cvFile) {
        const { key } = await handleCVUpload(cvFile);
        cvKey = key;
      }

      const payload = {
        ...data,
        profilePicture: profilePictureKey,
        cv: cvKey,
      };

      await registerCandidate(payload);
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputFieldWithLabel
        {...register("fullName")}
        name="fullName"
        label="Full Name"
        error={errors.fullName?.message}
        required
      />
      <UploadProfilePictureField
        name="profilePicture"
        label="Profile Picture"
        onPhotoSelect={(photo) => setProfilePicture(photo)}
        error={errors.profilePicture?.message}
      />
      <InputFieldWithLabel
        {...register("currentJobTitle")}
        name="currentJobTitle"
        label="Current Job Title"
        placeholder="e.g., Software Engineer"
        required
        error={errors.currentJobTitle?.message}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectField
          {...register("country")}
          name="country"
          label="Country"
          required
          options={[{ value: "", label: "Select Country" }, ...countryOptions]}
          error={errors.country?.message}
        />
        <InputFieldWithLabel
          {...register("phoneNumber")}
          name="phoneNumber"
          label="Phone Number"
          placeholder="e.g., +1 234 567 8901"
          required
          error={errors.phoneNumber?.message}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputFieldWithLabel
          {...register("education")}
          name="education"
          label="Education Level"
          placeholder="e.g., Bachelor's Degree"
          required
          error={errors.education?.message}
        />
        <InputFieldWithLabel
          {...register("experienceLevel")}
          name="experienceLevel"
          label="Experience Level"
          required
          error={errors.experienceLevel?.message}
        />
      </div>
      <InputFieldWithLabel
        {...register("yearsOfExperience")}
        name="yearsOfExperience"
        label="Years of Experience (optional)"
        placeholder="e.g., 5"
        error={errors.yearsOfExperience?.message}
      />
      <InputFieldWithLabel
        {...register("introductionSummary")}
        name="introductionSummary"
        label="Introduction / Summary"
        placeholder="Tell us about yourself, your experience, and what you're looking for..."
        required
        bottomText="0 characters (minimum 50)"
        fieldHeight="80px"
        error={errors.introductionSummary?.message}
      />
      {/* list */}
      <div className="grid grid-cols-[1fr_auto] gap-4 items-center">
        <InputFieldWithLabel
          {...register("skills")}
          name="skills"
          label="Skills"
          required
          placeholder="e.g., React, TypeScript, Node.js"
          bottomText="At least one skill is required"
          error={errors.skills?.message}
        />
        <AddButton className="mb:8 md:mb-2.5" />
      </div>
      <div className="grid grid-cols-[1fr_auto] gap-4 items-center">
        <InputFieldWithLabel
          {...register("languages")}
          name="languages"
          label="Languages"
          required
          placeholder="e.g., English, Spanish, Mandarin"
          bottomText="At least one language is required"
          error={errors.languages?.message}
        />
        <AddButton className="mb:8 md:mb-2.5" />
      </div>
      <UploadCVField
        name="cv"
        label="Import Your CV"
        required
        register={register}
        bottomText="Accepted formats: PDF, DOC, DOCX (Max 5MB)"
        error={errors.cv?.message}
        onFileSelect={(file) => setCvFile(file)}
      />
      <p className="text-lg font-semibold mt-2">
        Professional URLs <span className="text-red-500"> *</span>
      </p>
      <InputFieldWithLabel
        {...register("linkedIn")}
        name="linkedIn"
        label="LinkedIn"
        required
        placeholder="e.g., https://www.linkedin.com/in/yourprofile"
        error={errors.linkedIn?.message}
      />
      <InputFieldWithLabel
        {...register("gitHub")}
        name="gitHub"
        label="GitHub"
        required
        placeholder="e.g., https://github.com/yourusername"
        error={errors.gitHub?.message}
      />
      <ButtonComponent
        text={isSubmitting ? "Submit Application..." : "Submit Application"}
        type="submit"
        fullWidth
        disabled={isSubmitting}
      />
    </form>
  );
};

export default CandidateRegistrationForm;
