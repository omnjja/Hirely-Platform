import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import ButtonComponent from "@/components/ui/ButtonComponent";
import InfoSection from "./editProfile/InfoSection";
import EqualEmploymentSection from "./editProfile/EqualEmploymentSection";
import SectionWrapper from "../../../components/ui/SectionWrapper";
import { candidateEditProfileSchema } from "@/schemas/candidateEditProfileSchema";
import AddingField from "@/components/ui/AddingField";
import EducationSection from "./editProfile/EducationSection";
import EditExperience from "./editProfile/EditExperience";
import { skillsOptions } from "@/constants/skillsOptions";
import { languageOptions } from "@/constants/languageOptions";
import { profileFormMapper } from "@/constants/profileFormMapper";

const EditProfile = ({ isOpen, onClose, profileData, onSubmit, isPending }) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(candidateEditProfileSchema),
  });

  useEffect(() => {
    if (isOpen && profileData) {
      reset(profileFormMapper(profileData));
    }
  }, [isOpen, profileData, reset]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Modal Box */}
      <div
        className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
          <h2 className="text-lg font-bold text-[#1B41AA]">Edit Profile</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 flex flex-col gap-6"
        >
          <InfoSection register={register} errors={errors} watch={watch} />

          {/* ── Education ── */}
          <EducationSection
            control={control}
            register={register}
            errors={errors}
          />

          {/* ── Experience ── */}
          <EditExperience
            control={control}
            register={register}
            errors={errors}
          />

          {/* ── Skills & Languages ── */}
          <SectionWrapper title="Skills & Languages">
            <AddingField
              name="skills"
              control={control}
              errors={errors}
              placeholder="e.g., React, TypeScript, Node.js"
              required={false}
              labelStyle="text-sm text-gray-500"
              suggestionsList={skillsOptions}
            />
            <AddingField
              name="languages"
              control={control}
              errors={errors}
              placeholder="e.g., English, Arabic"
              required={false}
              labelStyle="text-sm text-gray-500"
              suggestionsList={languageOptions}
            />
          </SectionWrapper>

          <SectionWrapper title="Equal Employment">
            <EqualEmploymentSection register={register} errors={errors} />
          </SectionWrapper>

          {/* ── Actions ── */}
          <div className="flex justify-end gap-3 pt-2 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-lg border border-gray-300 text-sm text-gray-600 hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <ButtonComponent
              text={isPending ? "Saving..." : "Save Changes"}
              rounded="lg"
              gradientBorder={true}
              type="submit"
              disabled={isPending}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
