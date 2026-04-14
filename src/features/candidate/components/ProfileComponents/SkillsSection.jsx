import React from "react";

const SkillsSection = ({ skills }) => {
  return (
    <div>
      <p className="text-3xl font-semibold mb-4">Skills</p>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
