import React from "react";
import { useFieldArray } from "react-hook-form";
import Section from "@/components/ui/Section";
import Field from "@/components/ui/Field";

const EditExperience = ({ control, register, errors }) => {
  const {
    fields: experienceFields,
    append: addExperience,
    remove: removeExperience,
  } = useFieldArray({
    control,
    name: "experiences",
  });
  return (
    <Section title="Experience" variant="wrapper">
      {experienceFields.map((field, index) => (
        <div
          key={field.id}
          className="border p-3 rounded-lg flex flex-col gap-3"
        >
          <Field
            label="Job Title"
            error={errors?.experiences?.[index]?.jobTitle}
          >
            <input {...register(`experiences.${index}.jobTitle`)} />
          </Field>

          <Field
            label="Company Name"
            error={errors?.experiences?.[index]?.companyName}
          >
            <input {...register(`experiences.${index}.companyName`)} />
          </Field>

          <Field label="Location">
            <input {...register(`experiences.${index}.location`)} />
          </Field>

          <Field
            label="Start Date"
            error={errors?.experiences?.[index]?.startDate}
          >
            <input
              type="date"
              {...register(`experiences.${index}.startDate`)}
            />
          </Field>

          <Field label="End Date" error={errors?.experiences?.[index]?.endDate}>
            <input type="date" {...register(`experiences.${index}.endDate`)} />
          </Field>

          <Field
            label="Description"
            error={errors?.experiences?.[index]?.description}
          >
            <textarea {...register(`experiences.${index}.description`)} />
          </Field>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              {...register(`experiences.${index}.isCurrent`)}
            />
            Current Job
          </label>

          <button
            type="button"
            onClick={() => removeExperience(index)}
            className="text-red-500 text-sm"
          >
            Remove Experience
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() =>
          addExperience({
            id: "",
            jobTitle: "",
            companyName: "",
            location: "",
            startDate: "",
            endDate: "",
            description: "",
            isCurrent: false,
          })
        }
        className="text-blue-600 text-sm text-start"
      >
        + Add Experience
      </button>
    </Section>
  );
};

export default EditExperience;
