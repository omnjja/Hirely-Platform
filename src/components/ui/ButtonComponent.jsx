import clsx from "clsx";
import React from "react";

const SIZES = {
  xs: "px-2 py-1 text-xs",
  sm: "px-4 py-1.5 text-sm",
  md: "px-5 py-2",
  lg: "px-6 py-3 text-lg",
};
const ROUNDED = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  "4xl": "rounded-4xl",
  full: "rounded-full",
};

const DEFAULT_STYLE = {
  bgColor: "#1B41AA",
  textColor: "white",
  borderColor: "transparent",
  rounded: "4xl",
  size: "md",
};

const ButtonComponent = ({
  text,
  type = "button",
  onClick,
  fullWidth = false,
  disabled = false,
  gradientBorder = false,
  // Style overrides — all optional
  style = {},
  className = "",
  children,
}) => {
  const { bgColor, textColor,borderColor, rounded, size, shadow, bold } = {
    ...DEFAULT_STYLE,
    ...style,
  };

  const baseClasses = clsx(
    ROUNDED[rounded] ?? "rounded-4xl",
    "border", 
    "border-[var(--btn-border)]", 
    "active:scale-95 transition-all duration-200",
    "bg-[var(--btn-bg)] text-[var(--btn-text)] hover:bg-[var(--btn-bg-hover)]",
    shadow ? `shadow-${shadow}` : "shadow-none",
    bold ? "font-bold" : "font-normal",
    fullWidth ? "w-full" : "w-auto",
    disabled ? "opacity-50" : "cursor-pointer",
    SIZES[size],
    className,
  );

  const cssVars = {
    "--btn-bg": bgColor,
    "--btn-bg-hover": bgColor + "E6",
    "--btn-text": textColor,
    "--btn-border": borderColor,
  };

  if (gradientBorder) {
    return (
      <div
        className={clsx(
          "inline-block p-[1.5px] bg-linear-to-r from-[#1B41AA] to-[#0FB07C]",
          ROUNDED[rounded] ?? "rounded-4xl",
        )}
      >
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={clsx(
            "w-full h-full bg-white hover:bg-gray-100 text-black px-3 py-1",
            `rounded-${rounded}`,
            "transition-all duration-200 flex items-center justify-center gap-2",
            className,
          )}
        >
          {children}
          {text && <span>{text}</span>}
        </button>
      </div>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClasses}
      style={cssVars}
      disabled={disabled}
    >
      {children ?? text}
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
