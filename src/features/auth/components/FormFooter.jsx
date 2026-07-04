import React from "react";
import { Link } from "react-router-dom";

const FormFooter = ({ text, linkText, destination }) => {
  return (
    <div className="text-center text-sm text-[#969696] mt-4">
      {text}
      <Link
        to={destination}
        className="text-[#1B41AA] font-bold cursor-pointer underline"
      >
        {linkText}
      </Link>
    </div>
  );
};

export default FormFooter;
