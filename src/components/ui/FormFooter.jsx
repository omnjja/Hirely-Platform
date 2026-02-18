import React from "react";

const FormFooter = ({ text, linkText, onClick }) => {
  return (
    <div className="text-center text-sm text-gray-500 mt-2">
      {text}
      <span className="text-primary font-bold cursor-pointer underline" onClick={onClick}>
        {linkText}
      </span>
    </div>
  );
};

export default FormFooter;
