import AddingField from "@/components/ui/AddingField";
import React from "react";
import IconWrapper from "@/components/ui/IconWrapper";
import { useFormContext } from "react-hook-form";
import { useIsMobile } from "@/hooks/use-mobile";

const JobSkills = ({ head, name, placeholder, icon }) => {
  const isMobile = useIsMobile();
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="rounded-xl shadow-xs p-5">
      <div className="flex items-center gap-3 mb-4">
        <IconWrapper className="bg-[#D5E3FC]">{icon}</IconWrapper>
        <p className="text-sm sm:text-[20px] text-[#2A3439] font-semibold">
          {head}
        </p>
      </div>
      <AddingField
        name={name}
        placeholder={placeholder}
        control={control}
        errors={errors}
        withBtn={isMobile ? true : false}
      />
    </div>
  );
};

export default JobSkills;
