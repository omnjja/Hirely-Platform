import AddingField from "@/components/ui/AddingField";
import React from "react";
import useCustomForm from "@/hooks/useCustomForm";
import z from "zod";

const JobSkills = () => {
  const {
    control,
    formState: { errors },
  } = useCustomForm({
    defaultValues: {
      skills: [],
    },
    mode: "onChange",
    schema: z.object({
      skills: z.array(z.string()).min(1, "At least one skill is required"),
    }),
  });
  return (
    <div className="rounded-xl shadow-xs p-5">
      <div className="mb-4">
        <p className="text-lg font-medium">? Keywords & Skills</p>
      </div>
      <AddingField
        listName="job_skills"
        placeholder="type a skill and press enter"
        control={control}
        errors={errors}
        withBtn={false}
      />
    </div>
  );
};

export default JobSkills;
