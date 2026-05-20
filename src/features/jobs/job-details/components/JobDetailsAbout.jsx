import React from "react";

const JobDetailsAbout = ({about}) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-bold text-[#1B41AA] text-xl sm:text-2xl">
        About the Role
      </p>
      <p className="text-sm sm:text-[16px] text-[#595C5E]">
        {about}
      </p>
    </div>
  );
};

export default JobDetailsAbout;
