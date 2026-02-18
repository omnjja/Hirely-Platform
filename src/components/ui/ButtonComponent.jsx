import React from "react";

const ButtonComponent = ({
  text,
  type = "button",
  onClick,
  fullWidth = false,
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
        cursor-pointer
        ${fullWidth ? "w-full" : "w-auto"}
      `}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
