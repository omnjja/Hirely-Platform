import React, { forwardRef } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import clsx from "clsx";

const SelectField = forwardRef(
  (
    {
      name,
      label,
      options = [],
      required = false,
      placeholder,
      error,
      variant = "default",
      rounded = "md",
      size = "small",
      fullWidth = true,
      containerClassName = "",
      sx = {},
      textColor = "#11181C",
      labelClassName = "",

      ...props
    },
    ref,
  ) => {
    const variants = {
      default: { bg: "#F9FAFB" },
      white: { bg: "#FFFFFF" },
      outlined: { bg: "transparent" },
    };

    const roundedStyles = {
      none: 0,
      sm: 1,
      md: 2,
      lg: 4,
      xl: 8,
      full: 999,
    };

    const selectedVariant = variants[variant];

    return (
      <div className={clsx("mb-3 w-full", containerClassName)}>
        {label && (
          <label htmlFor={name} className={clsx("block font-medium text-sm mb-1", labelClassName)}>
            {label}
            {required && <span className="text-red-500"> *</span>}
          </label>
        )}

        <FormControl
          fullWidth={fullWidth}
          size={size}
          error={Boolean(error)}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: roundedStyles[rounded] || roundedStyles["md"],
              bgcolor: selectedVariant.bg,
            },
            "& .MuiFormHelperText-root": {
              minHeight: 18,
              fontSize: { xs: "10px", sm: "11px", md: "12px" },
              mt: 0.5,
              ml: 0,
              color: error ? "#ef4444" : "#6A7282",
            },
            ...sx,
          }}
        >
          <Select
            id={name}
            name={name}
            inputRef={ref}
            displayEmpty
            defaultValue=""
            {...props}
            renderValue={(selected) => {
              if (!selected) {
                return <span style={{ color: "#9CA3AF" }}>{placeholder}</span>;
              }
              const selectedOption = options.find(
                (opt) => opt.value === selected,
              );

              return selectedOption?.label || selected;
            }}
            sx={{
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
              color: textColor,
            }}
          >
            {placeholder && (
              <MenuItem value="" disabled sx={{ color: "#9CA3AF" }}>
                {placeholder}
              </MenuItem>
            )}

            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>

          <FormHelperText>{error || " "}</FormHelperText>
        </FormControl>
      </div>
    );
  },
);

export default SelectField;
