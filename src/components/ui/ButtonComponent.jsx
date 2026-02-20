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
        bg-primary text-white
        px-5 py-2
        rounded-lg
        hover:bg-primary/90
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
