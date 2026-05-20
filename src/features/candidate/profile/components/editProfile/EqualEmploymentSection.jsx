import React from "react";
import Field from "@/components/ui/Field";

const EqualEmploymentSection = ({ register, errors }) => {
  return (
    <>
      <Field label="Gender" error={errors.equalEmployment?.gender}>
        <input
          {...register("equalEmployment.gender")}
          placeholder="e.g. Female"
        />
      </Field>
      <Field
        label="Race / Ethnicity"
        error={errors.equalEmployment?.raceOrEthnicity}
      >
        <input {...register("equalEmployment.raceOrEthnicity")} />
      </Field>
      <Field
        label="Veteran Status"
        error={errors.equalEmployment?.veteranStatus}
      >
        <input {...register("equalEmployment.veteranStatus")} />
      </Field>
      <Field
        label="Disability Status"
        error={errors.equalEmployment?.disabilityStatus}
      >
        <input {...register("equalEmployment.disabilityStatus")} />
      </Field>
    </>
  );
};

export default EqualEmploymentSection;
