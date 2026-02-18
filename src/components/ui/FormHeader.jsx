import React from "react";

const FormHeader = ({ head, subhead }) => {
  return (
    <div className="my-5 flex flex-col items-start gap-1.5">
      <div className="text-3xl font-bold text-text">{head}</div>
      <div className="text-sm text-[#969696]">{subhead}</div>
    </div>
  );
};

export default FormHeader;
