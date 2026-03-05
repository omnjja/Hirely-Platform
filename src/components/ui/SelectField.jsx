import React from "react";
import { Controller } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";

const SelectField = ({
  name,
  control,
  label,
  options,
  required = false,
  placeholder,
  ...props
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="block font-medium text-sm mb-1">
        {label}
        {required && <span style={{ color: "#ef4444" }}> *</span>}
      </label>

      <Controller
        name={name}
        control={control}
        rules={{ required: required ? `${label} is required` : false }}
        render={({ field, fieldState }) => (
          <FormControl
            fullWidth
            size="small"
            error={Boolean(fieldState.error)}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                bgcolor: "#F9FAFB",
              },
              "& .MuiFormHelperText-root": {
                minHeight: 18,
                fontSize: { xs: "10px", sm: "11px", md: "12px" },
                mt: 0.5,
              },
            }}
          >
            <Select
              {...field}
              id={name}
              displayEmpty
              value={field.value ?? ""}
              {...props}
              sx={{
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
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

            <FormHelperText>{fieldState.error?.message || " "}</FormHelperText>
          </FormControl>
        )}
      />
    </div>
  );
};

export default SelectField;
