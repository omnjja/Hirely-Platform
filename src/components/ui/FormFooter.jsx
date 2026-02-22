import React from "react";
import { Link } from "react-router-dom";

const FormFooter = ({ text, linkText, destination }) => {
  return (
    <div className="text-center text-sm text-gray-500 mt-2">
      {text}
      <Link
        to={destination}
        className="text-primary font-bold cursor-pointer underline"
      >
        {linkText}
      </Link>
    </div>
  );
};

export default FormFooter;
