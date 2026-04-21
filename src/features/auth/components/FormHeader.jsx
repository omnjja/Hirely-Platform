import React from "react";

const FormHeader = ({ head, subhead }) => {
  return (
    <div className="my-4 w-full text-center md:text-left">
      <h1
        className="
          text-xl
          md:text-3xl
          font-bold
          text-[#2E2E2E]
        "
      >
        {head}
      </h1>

      <p
        className="
          mt-2
          text-sm
          md:text-base
          text-[#969696]
        "
      >
        {subhead}
      </p>
    </div>
  );
};

export default FormHeader;
