import React from "react";

const ButtonComponent = ({
  text,
  type = "button",
  onClick,
  fullWidth = false,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        bg-[#1B41AA] text-white
        px-5 py-2
        rounded-4xl
        hover:bg-[#1B41AA]/90
        transition
        ${fullWidth ? "w-full" : "w-auto"}
        ${disabled ? "opacity-50 " : "cursor-pointer"}
      `}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
