import React, { forwardRef } from "react";
import TextField from "@mui/material/TextField";
import clsx from "clsx";

const roundedStyles = {
  none: 0,
  sm: 1,
  md: 2,
  lg: 4,
  xl: 8,
  full: 999,
};

const InputFieldWithLabel = forwardRef(
  (
    {
      name,
      label,
      required,
      bottomText,
      error,
      variant = "default",
      size = "small",
      fieldHeight,
      fullWidth = true,
      containerClassName = "",
      inputClassName = "",
      rounded,
      sx = {},
      ...props
    },
    ref,
  ) => {
    const variants = {
      default: {
        bg: "#F9FAFB",
        borderRadius: roundedStyles[rounded] || roundedStyles["md"],
      },
      white: {
        bg: "#FFFFFF",
        borderRadius: roundedStyles[rounded] || roundedStyles["md"],
      },
      outlined: {
        bg: "transparent",
        borderRadius: roundedStyles[rounded] || roundedStyles["md"],
      },
    };

    const selectedVariant = variants[variant];
    const noOfRows = fieldHeight / 20 || undefined;

    return (
      <div className={clsx("mb-3 w-full", containerClassName)}>
        {label && (
          <label htmlFor={name} className="block font-medium text-sm mb-1">
            {label}
            {required && <span className="text-red-500"> *</span>}
          </label>
        )}

        <TextField
          {...props}
          id={name}
          name={name}
          fullWidth={fullWidth}
          size={size}
          inputRef={ref}
          error={Boolean(error)}
          helperText={bottomText || error || " "}
          multiline={Boolean(fieldHeight)}
          rows={noOfRows}
          className={inputClassName}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: selectedVariant.borderRadius,
              bgcolor: selectedVariant.bg,
              alignItems: "flex-start",
            },
            "& .MuiFormHelperText-root": {
              mt: 0.5,
              ml: 0,
              color: error ? "#ef4444" : "#6A7282",
              fontSize: { xs: "10px", sm: "11px", md: "12px" },
            },
            "& input, & textarea": {
              color: "#11181C",
              padding: "8px 12px",
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
            },
            "& input::placeholder, & textarea::placeholder": {
              color: "#9CA3AF",
              opacity: 1,
            },
            ...sx,
          }}
        />
      </div>
    );
  },
);

export default InputFieldWithLabel;
