import React from "react";

const AddButton = ({ text = "Add", onClick, className, type = "button" }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`
        flex items-center justify-center gap-2
         h-10
        px-5 mb-2
        bg-white
        border border-gray-300
        rounded-xl
        text-gray-800
        font-medium
        hover:bg-gray-200
        transition-all duration-200
        ${className}
      `}
    >
      <span className="text-xl leading-none">+</span>
      <span>{text}</span>
    </button>
  );
};

export default AddButton;
