import React, { forwardRef } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";

const SelectField = forwardRef(
  (
    { name, label, options, required = false, placeholder, error, ...props },
    ref,
  ) => {
    return (
      <div className="mb-3">
        <label htmlFor={name} className="block font-medium text-sm mb-1">
          {label}
          {required && <span style={{ color: "#ef4444" }}> *</span>}
        </label>

        <FormControl
          fullWidth
          size="small"
          error={Boolean(error)}
          sx={{
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
          }}
        >
          <Select
            id={name}
            name={name}
            inputRef={ref}
            displayEmpty
            defaultValue=""
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

          <FormHelperText>{error || " "}</FormHelperText>
        </FormControl>
      </div>
    );
  },
);

export default SelectField;
