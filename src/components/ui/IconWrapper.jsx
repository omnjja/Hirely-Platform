import React from "react";

const IconWrapper = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-[#1B41AA] p-2 sm:p-3 rounded-xl flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
};

export default IconWrapper;
