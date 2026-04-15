import AddingField from "@/components/ui/AddingField";
import React from "react";
import useCustomForm from "@/hooks/useCustomForm";
import z from "zod";
import IconWrapper from "@/components/ui/IconWrapper";

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
      <div className="flex items-center gap-3 mb-4">
        <IconWrapper className="bg-[#D5E3FC]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM2 14H18V4H2V14ZM5.5 13L4.1 11.6L6.675 9L4.075 6.4L5.5 5L9.5 9L5.5 13ZM10 13V11H16V13H10Z"
              fill="#526074"
            />
          </svg>
        </IconWrapper>
        <p className="text-lg font-medium">Keywords & Skills</p>
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
