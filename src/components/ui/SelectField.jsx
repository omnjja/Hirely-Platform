import React, { forwardRef } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";

const SelectField = forwardRef(
  (
    {
      name,
      label,
      options,
      required = false,
      placeholder,
      error,
      value = "",
      variant = "default",
      ...props
    },
    ref,
  ) => {
    const isField = variant === "field"; // ✅ the one situation

    return (
      <div className={isField ? "flex flex-col gap-1" : "mb-3"}>
        <label
          htmlFor={name}
          className={
            isField ? "text-xs text-gray-500" : "block font-medium text-sm mb-1"
          }
        >
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>

        <FormControl
          fullWidth
          size="small"
          error={Boolean(error)}
          sx={
            isField
              ? // ✅ Field style — only when variant="field"
                {
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    bgcolor: "white",
                    fontSize: "14px",
                    "& fieldset": { borderColor: "#D1D5DB" },
                    "&:hover fieldset": { borderColor: "#D1D5DB" },
                    "&.Mui-focused fieldset": {
                      borderColor: "#1B41AA",
                      borderWidth: "1px",
                    },
                  },
                  "& .MuiSelect-select": { padding: "8px 12px" },
                  "& .MuiFormHelperText-root": {
                    minHeight: 0,
                    fontSize: "12px",
                    mt: 0.5,
                    ml: 0,
                    color: "#ef4444",
                  },
                }
              : // ✅ Original style — unchanged
                {
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    bgcolor: "#F9FAFB",
                  },
                  "& .MuiFormHelperText-root": {
                    minHeight: 18,
                    fontSize: { xs: "10px", sm: "11px", md: "12px" },
                    mt: 0.5,
                    ml: 0,
                    color: "#ef4444",
                  },
                }
          }
        >
          <Select
            id={name}
            name={name}
            inputRef={ref}
            displayEmpty
            value={value}
            {...props}
            sx={
              isField
                ? {} // no extra sx needed
                : { fontSize: { xs: "14px", sm: "15px", md: "16px" } }
            }
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
