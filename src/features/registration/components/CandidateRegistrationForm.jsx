import React, { useEffect, useState } from "react";
import InputFieldWithLabel from "@/components/ui/InputFieldWithLabel";
import SelectField from "@/components/ui/SelectField";
import {
  candidateRegistrationDefaultValues,
  candidateRegistrationSchema,
} from "@/schemas/candidateRegistrationSchema";
import UploadCVField from "@/components/ui/UploadCVField";
import UploadProfilePictureField from "@/components/ui/UploadProfilePictureField";
import { countryOptions } from "@/constants/countryOptions";
import useCandidateRegMutation from "../hooks/useCandidateRegMutation";
import useCustomForm from "@/hooks/useCustomForm";
import { useRegistrationUpload } from "../hooks/useRegisterationUpload";
import ButtonComponent from "@/components/ui/ButtonComponent";
import { experienceOptions } from "@/constants/experienceOptions";
import AddingField from "@/components/ui/AddingField";
import { candidatePayload, progressConfig } from "@/constants/candidatePayload";
import { skillsOptions } from "@/constants/skillsOptions";
import { languageOptions } from "@/constants/languageOptions";
import useAppNavigate from "@/hooks/useAppNavigate";

const CandidateRegistrationForm = ({ onProgressChange }) => {
  const { mutateAsync: registerCandidate } = useCandidateRegMutation(); // send all data to registerCandidate
  const { handleImageUpload, handleCVUpload } = useRegistrationUpload();
  const [profilePicture, setProfilePicture] = useState(null);

  const {
    register,
    setError,
    reset,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting, dirtyFields },
  } = useCustomForm({
    defaultValues: candidateRegistrationDefaultValues,
    schema: candidateRegistrationSchema,
    mode: "onChange",
  });

  const summaryValue = watch("profileSummary") || "";
  const selectedCountry = watch("country") || "";
  const textLength = summaryValue.length;
  const { toCandidateLandingPage } = useAppNavigate();

  const values = watch();
  useEffect(() => {
    const singleFilled = progressConfig.single.filter((key) =>
      Boolean(values[key]),
    ).length;
    const arrayFilled = progressConfig.array.filter(
      (key) => values[key]?.length > 0,
    ).length;
    const total = progressConfig.single.length + progressConfig.array.length;
    onProgressChange(((singleFilled + arrayFilled) / total) * 100);
  }, [values]);

  const onSubmit = async (data) => {
    try {
      let profilePictureKey = null;
      let cvKey = null;
      if (profilePicture) {
        const { key } = await handleImageUpload(profilePicture);
        profilePictureKey = key;
      }
      const cvFile = data.cv?.[0];
      if (cvFile) {
        const { key } = await handleCVUpload(cvFile);
        cvKey = key;
      }

      const payload = candidatePayload(data, profilePictureKey, cvKey);

      await registerCandidate(payload);
      reset();
      toCandidateLandingPage();
    } catch (error) {
      setError("root", {
        message:
          error.response?.data?.message ||
          "An error occurred. Please try again.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="text-xl text-[#0576D6] font-bold pb-5">
        Candidate Application Form
      </p>
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
        register={register}
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
          placeholder="Select country"
          value={selectedCountry}
          required
          options={countryOptions}
          error={errors.country?.message}
        />
        <InputFieldWithLabel
          {...register("mobileNumber")}
          name="mobileNumber"
          label="Mobile Number"
          placeholder="e.g., +1 234 567 8901"
          required
          error={errors.mobileNumber?.message}
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
        <SelectField
          {...register("experienceLevel")}
          name="experienceLevel"
          label="Experience Level"
          placeholder="Select Experience Level"
          options={experienceOptions}
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
        {...register("profileSummary")}
        name="profileSummary"
        label="Introduction / Summary"
        placeholder="Tell us about yourself, your experience, and what you're looking for..."
        required
        bottomText={`${textLength} characters (minimum 50)`}
        fieldHeight={80}
        error={errors.profileSummary?.message}
      />
      <AddingField
        name="skills"
        listName="skills"
        control={control}
        errors={errors}
        placeholder="e.g., React, TypeScript, Node.js"
        bottomText="At least one skill is required"
        required
        suggestionsList={skillsOptions}
      />
      <AddingField
        name="languages"
        listName="languages"
        control={control}
        errors={errors}
        placeholder="e.g., English, Arabic, French"
        bottomText="At least one language is required"
        required
        suggestionsList={languageOptions}
      />
      <UploadCVField
        name="cv"
        label="Import Your CV"
        required
        register={register}
        bottomText="Accepted formats: PDF, DOC, DOCX (Max 5MB)"
        error={errors.cv?.message}
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
