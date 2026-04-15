import clsx from "clsx";
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
  shadow = false,
  bold = false,
  size = "md",
  children,
}) => {
  const sizes = {
    xs: "px-2 py-1 text-xs",
    sm: "px-4 py-1.5 text-sm",
    md: "px-5 py-2",
    lg: "px-6 py-3 text-lg",
  };
  const baseClasses = clsx(
    `
        rounded-${rounded}
        active:scale-95
        transition-all duration-200
        bg-[var(--btn-bg)]
        text-[var(--btn-text)]
        hover:bg-[var(--btn-bg-hover)]
        shadow-${shadow ? shadow : "none"}
        font-${bold ? "bold" : "normal"}
        ${fullWidth ? "w-full" : "w-auto"}
        ${disabled ? "opacity-50 " : "cursor-pointer"}
        `,
    sizes[size || "md"],
  );
  const buttonContent = (
    <button
      type={type}
      onClick={onClick}
      className={baseClasses}
      style={{
        "--btn-bg": bgColor,
        "--btn-bg-hover": bgColor + "E6",
        "--btn-text": textColor,
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
