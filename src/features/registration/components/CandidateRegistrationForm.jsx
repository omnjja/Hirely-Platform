import React from "react";
import InputFieldWithLabel from "@/components/ui/InputFieldWithLabel";
import SelectField from "@/components/ui/SelectField";
import {
  candidateRegistrationDefaultValues,
  candidateRegistrationSchema,
} from "@/schemas/candidateRegistrationSchema";
import ButtonComponent from "@/components/ui/ButtonComponent";
import useCandidateRegMutation from "../hooks/useCandidateRegMutation";
import UseCustomForm from "@/hooks/UseCustomForm";
import { useRegistrationUpload } from "../hooks/useRegisterationUpload";

const CandidateRegistrationForm = () => {
  const { mutateAsync: registerCandidate } = useCandidateRegMutation();// send all data to registerCandidate
   const { handleImageUpload, handleCVUpload } = useRegistrationUpload();

    const {
    register,
    control,
    setError,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
    } = UseCustomForm({
    defaultValues: candidateRegistrationDefaultValues,
    schema: candidateRegistrationSchema,
  });


    const [profilePicture, setProfilePicture] = React.useState(null);
    const [cvFile, setCvFile] = React.useState(null);

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
        cv: cvKey 
        };

        await registerCandidate(payload);
        reset();

    } catch (error) {
      setError("root", {
        message: error.response?.data?.message || "An error occurred. Please try again.",
      });
      console.log("register error:", error);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <InputFieldWithLabel
            {...register("fullName")}
          name="fullName"
          control={control}
          label="Full Name"
          error={errors.fullName?.message}
          required
          placeholder="John Doe"
          rules={{
            required: "Full Name is required",
          }}
        />
        <FileUploadField
          label="profilePicture"
          required
          onChange={(file) => setProfilePicture(file)}
        />
        <InputFieldWithLabel
          {...register("currentJobTitle")}
          name="currentJobTitle"
          label="Current Job Title"
          placeholder="e.g., Senior Software Engineer"
          required
          control={control}
          rules={{
            required: "Current Job Title is required",
          }}
          error={errors.currentJobTitle?.message}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputFieldWithLabel
            {...register("country")}
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
            error={errors.country?.message}
          />
          <InputFieldWithLabel
            {...register("phoneNumber")}
            name="phoneNumber"
            label="Phone Number"
            placeholder="e.g., +1 234 567 8901"
            required
            control={control}
            rules={{ required: "Phone Number is required" }}
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
            control={control}
            error={errors.education?.message}
          />
          <InputFieldWithLabel
            {...register("experienceLevel")}
            name="experienceLevel"
            label="Experience Level"
            required
            control={control}
            error={errors.experienceLevel?.message}

          />
        </div>
        <InputFieldWithLabel
            {...register("yearsOfExperience")}
          name="yearsOfExperience"
          label="Years of Experience (optional)"
          placeholder="e.g., 5"
          control={control}
          error={errors.yearsOfExperience?.message}
        />
        <InputFieldWithLabel
            {...register("introductionSummary")}
          name="Introduction-Summary"
          label="Introduction / Summary"
          placeholder="Tell us about yourself, your experience, and what you're looking for..."
          control={control}
          required
          bottomText="0 characters (minimum 50)"
          fieldHeight="80px"
            error={errors.introductionSummary?.message}
        />
        <div className="grid grid-cols-[1fr_auto] gap-4 items-center">
          <InputFieldWithLabel
            {...register("skills")}
            name="skills"
            label="Skills"
            required
            placeholder="e.g., React, TypeScript, Node.js"
            control={control}
            bottomText="At least one skill is required"
            bottomTextColor="#FB2C36"
            error={errors.skills?.message}
          />
          <AddButton />
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-4 items-center">
          <InputFieldWithLabel
            {...register("languages")}
            name="languages"
            label="Languages"
            required
            placeholder="e.g., English, Spanish, Mandarin"
            control={control}
            bottomText="At least one language is required"
            bottomTextColor="#FB2C36"
            error={errors.languages?.message}
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
          onChange={(file) => setCvFile(file)}
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
          control={control}
            error={errors.linkedIn?.message}
        />
        <InputFieldWithLabel
            {...register("gitHub")}
          name="gitHub"
          label="GitHub"
          required
          placeholder="e.g., https://github.com/yourusername"
          control={control}
            error={errors.gitHub?.message}
        />
      </form>
    )
    };
}
