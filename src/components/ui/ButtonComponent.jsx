import React from "react";

const ButtonComponent = ({
  text,
  type = "button",
  onClick,
  fullWidth = false,
  disabled = false,
  bgColor = "#1B41AA",
  textColor = "white",
  rounded = "4xl",
  gradientBorder = false,
  children,
}) => {
  const buttonContent = (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-5 py-2
        hover:opacity-90
        active:scale-97
        transition-all duration-200
        ${fullWidth ? "w-full" : "w-auto"}
        ${disabled ? "opacity-50 " : "cursor-pointer"}
        `}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: rounded === "4xl" ? "32px" : "12px",
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
  if (gradientBorder) {
    return (
      <div
        className={`
        inline-block
        p-[1.5px]
        bg-linear-to-r
      from-[#1B41AA]
      to-[#0FB07C]
      rounded-${rounded}
  `}
      >
        <button
          type={type}
          onClick={onClick}
          className={`
      w-full h-full
      bg-white
      hover:bg-gray-100
      text-black
      px-3 py-1
      rounded-${rounded}
      transition-all duration-200
      flex items-center justify-center gap-2
      ${fullWidth ? "w-full" : ""}
    `}
          disabled={disabled}
        >
          {children}
          <span>{text}</span>
        </button>
      </div>
    );
  }
  return buttonContent;
};

export default ButtonComponent;
