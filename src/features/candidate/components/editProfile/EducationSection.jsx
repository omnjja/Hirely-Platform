import { useFieldArray } from "react-hook-form";
import SectionWrapper from "../shared/SectionWrapper";
import Field from "../shared/Field";

const EducationSection = ({ control, register, errors }) => {
  const {
    fields: educationFields,
    append: addEducation,
    remove: removeEducation,
  } = useFieldArray({
    control,
    name: "educations",
  });

  return (
    <SectionWrapper title="Education">
      {educationFields.map((field, index) => (
        <div
          key={field.id}
          className="border p-3 rounded-lg flex flex-col gap-3"
        >
          <Field
            label="Institution"
            error={errors?.eduacations?.[index]?.institution}
          >
            <input {...register(`educations.${index}.institution`)} />
          </Field>

          <Field label="Degree" error={errors?.eduacations?.[index]?.Degree}>
            <input {...register(`educations.${index}.degree`)} />
          </Field>

          <Field
            label="Field of Study"
            error={errors?.eduacations?.[index]?.fieldOfStudy}
          >
            <input {...register(`educations.${index}.fieldOfStudy`)} />
          </Field>

          <Field
            label="Start Date"
            error={errors?.eduacations?.[index]?.startDate}
          >
            <input type="date" {...register(`educations.${index}.startDate`)} />
          </Field>

          <Field label="End Date" error={errors?.eduacations?.[index]?.endDate}>
            <input type="date" {...register(`educations.${index}.endDate`)} />
          </Field>

          <Field
            label="Description"
            error={errors?.eduacations?.[index]?.description}
          >
            <textarea {...register(`educations.${index}.description`)} />
          </Field>

          <button
            type="button"
            onClick={() => removeEducation(index)}
            className="text-red-500 text-sm"
          >
            Remove Education
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() =>
          addEducation({
            institution: "",
            degree: "",
            fieldOfStudy: "",
            startDate: "",
            endDate: "",
            description: "",
          })
        }
        className="text-blue-600 text-sm text-start"
      >
        + Add Education
      </button>
    </SectionWrapper>
  );
};

export default EducationSection;
