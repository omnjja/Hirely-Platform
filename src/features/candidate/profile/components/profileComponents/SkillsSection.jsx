import React from "react";

const SkillsSection = ({ skills }) => {
  return (
    <>
      {skills.length > 0 ? (
        <div>
          <p className="text-xl md:text-2xl  font-semibold mb-2 md:mb-4">
            Skills
          </p>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs md:text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-gray-500">No skills</p>
      )}
    </>
  );
};

export default SkillsSection;
