import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { hrRegistrationSchema } from "@/schemas/hrRegistrationSchema";
import ButtonComponent from "@/components/ui/ButtonComponent";
import Field from "@/components/ui/Field";

const EditHrProfileForm = ({
  isOpen,
  onClose,
  profileData,
  onSubmit,
  isPending,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(hrRegistrationSchema),
  });

  useEffect(() => {
    if (profileData) {
      reset({
        fullName: profileData.fullName || "",
        jobTitle: profileData.jobTitle || "",
        phoneNumber: profileData.phoneNumber || "",
        companyName: profileData.companyName || "",
        companyWebsite: profileData.companyWebsite || "",
        companySize: profileData.companySize || "",
        companyIndustry: profileData.companyIndustry || "",
        companySummary: profileData.companySummary || "",
      });
    }
  }, [profileData, reset]);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-2xl shadow-xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold text-[#1B41AA] mb-6">
          Edit profile
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Field label="Full Name" error={errors.fullName}>
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              {...register("fullName")}
              className="w-full border rounded-lg px-4 py-2"
            />
          </Field>

          <Field label="Job Title" error={errors.jobTitle}>
            <input
              type="text"
              name="jobTitle"
              placeholder="Job title"
              {...register("jobTitle")}
              className="w-full border rounded-lg px-4 py-2"
            />
          </Field>

          <Field label="Phone Number" error={errors.phoneNumber}>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone number"
              {...register("phoneNumber")}
              className="w-full border rounded-lg px-4 py-2"
            />
          </Field>

          <Field label="Company Name" error={errors.companyName}>
            <input
              type="text"
              name="companyName"
              placeholder="Company name"
              {...register("companyName")}
              className="w-full border rounded-lg px-4 py-2"
            />
          </Field>

          <Field label="Company Website">
            <input
              type="text"
              name="companyWebsite"
              placeholder="Company website"
              {...register("companyWebsite")}
              className="w-full border rounded-lg px-4 py-2"
            />
          </Field>

          <Field label="Company Size" error={errors.companySize}>
            <input
              type="text"
              name="companySize"
              placeholder="Company size"
              {...register("companySize")}
              className="w-full border rounded-lg px-4 py-2"
            />
          </Field>

          <Field label="Company Industry" error={errors.companyIndustry}>
            <input
              type="text"
              name="companyIndustry"
              placeholder="Company industry"
              {...register("companyIndustry")}
              className="w-full border rounded-lg px-4 py-2"
            />
          </Field>

          <Field label="Company Summary" error={errors.companySummary}>
            <textarea
              name="companySummary"
              placeholder="Company summary"
              {...register("companySummary")}
              rows={4}
              className="w-full border rounded-lg px-4 py-2"
            />
          </Field>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="border px-4 py-2 rounded-xl"
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

export default EditHrProfileForm;
