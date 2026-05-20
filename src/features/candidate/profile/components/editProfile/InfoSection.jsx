import Field from "@/components/ui/Field";
import Section from "@/components/ui/Section";
import SelectField from "@/components/ui/SelectField";
import { countryOptions } from "@/constants/countryOptions";

const InfoSection = ({ register, errors, watch }) => {
  const selectedCountry = watch("country") || "";

  return (
    <>
      <Section title="Basic Info" variant="wrapper">
        <Field label="Full Name" error={errors.fullName}>
          <input {...register("fullName")} placeholder="Full Name" />
        </Field>
        <Field label="Job Title" error={errors.currentJobTitle}>
          <input
            {...register("currentJobTitle")}
            placeholder="e.g. Senior Frontend Developer"
          />
        </Field>
        <SelectField
          {...register("country")}
          name="country"
          label="Country"
          placeholder="Select country"
          value={selectedCountry}
          options={countryOptions}
          error={errors.country?.message}
          variant="field"
        />
        <Field label="Phone Number" error={errors.mobileNumber}>
          <input
            {...register("mobileNumber")}
            placeholder="+1 (555) 123-4567"
          />
        </Field>
      </Section>

      <Section title="About" variant="wrapper">
        <Field label="Profile Summary" error={errors.profileSummary}>
          <textarea
            {...register("profileSummary")}
            rows={3}
            placeholder="Short summary shown on your profile..."
          />
        </Field>
      </Section>

      <Section title="Social Links" variant="wrapper">
        <Field label="LinkedIn URL" error={errors.linkedInUrl}>
          <input
            {...register("linkedInUrl")}
            placeholder="https://linkedin.com/in/..."
          />
        </Field>
        <Field label="GitHub URL" error={errors.githubUrl}>
          <input
            {...register("githubUrl")}
            placeholder="https://github.com/..."
          />
        </Field>
      </Section>
    </>
  );
};

export default InfoSection;
