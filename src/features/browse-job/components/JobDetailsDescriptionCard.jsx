import React from "react";
import ResponsabiltyItem from "./ResponsabiltyItem";

const JobDetailsDescriptionCard = ({ title, icon, subIcon, color }) => {
  return (
    <div
      className="relative overflow-hidden p-8 rounded-4xl w-full"
      style={{ boxShadow: "0px 1px 2px 0px #0000000D" }}
    >
      <div
        className="absolute left-0 top-0 h-full w-1 rounded-l-4xl"
        style={{ backgroundColor: color }}
      />
      <div className="flex gap-3 mb-3">
        {icon}
        <p className="text-xl text-[#2C2F31] font-bold">{title}</p>
      </div>
      <div className="pl-1 flex flex-col gap-2">
        <ResponsabiltyItem
          subIcon={subIcon}
          text={
            "Proficiency in Figma, prototyping, and basic front-end knowledge."
          }
        />
        <ResponsabiltyItem
          subIcon={subIcon}
          text={
            "Proficiency in Figma, prototyping, and basic front-end knowledge."
          }
        />
        <ResponsabiltyItem
          subIcon={subIcon}
          text={
            "Proficiency in Figma, prototyping, and basic front-end knowledge."
          }
        />
        <ResponsabiltyItem
          subIcon={subIcon}
          text={
            "Proficiency in Figma, prototyping, and basic front-end knowledge."
          }
        />
      </div>
    </div>
  );
};

export default JobDetailsDescriptionCard;
