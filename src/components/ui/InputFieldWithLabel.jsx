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
      labelClassName = "",
      variant = "default",
      size = "small",
      fieldHeight,
      fullWidth = true,
      containerClassName = "",
      inputClassName = "",
      rounded = "md",
      sx = {},
      labelStyle = "block font-medium text-sm mb-1",
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
      field: {
        bg: "#FFFFFF",
        borderRadius: 8,
      },
    };

    const selectedVariant = variants[variant] || variants["default"];

    const noOfRows = fieldHeight ? Math.floor(fieldHeight / 20) : undefined;

    const isField = variant === "field";

    return (
      <div
        className={clsx(
          isField ? "flex flex-col gap-1" : "mb-3 w-full",
          containerClassName,
        )}
      >
        {label && (
          <label
            htmlFor={name}
            className={clsx(
              isField ? "text-xs text-gray-500" : labelStyle,
              labelClassName,
            )}
          >
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

              ...(isField && {
                "& fieldset": {
                  borderColor: "#D1D5DB",
                },
                "&:hover fieldset": {
                  borderColor: "#D1D5DB",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1B41AA",
                  borderWidth: "1px",
                },
              }),
            },

            "& input, & textarea": {
              color: "#11181C",
              padding: "8px 12px",
              fontSize: {
                xs: "14px",
                sm: "15px",
                md: "16px",
              },
            },

            "& input::placeholder, & textarea::placeholder": {
              color: "#9CA3AF",
              opacity: 1,
            },

            "& .MuiFormHelperText-root": {
              mt: 0.5,
              ml: 0,
              color: error ? "#ef4444" : "#6A7282",
              fontSize: {
                xs: "10px",
                sm: "11px",
                md: "12px",
              },
            },

            "& .MuiOutlinedInput-root.Mui-disabled": {
              backgroundColor: "#F3F4F6",
            },

            "& .MuiInputBase-input.Mui-disabled": {
              WebkitTextFillColor: "#9CA3AF",
              cursor: "not-allowed",
            },

            ...sx,
          }}
        />
      </div>
    );
  },
);

export default InputFieldWithLabel;
