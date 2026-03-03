import React, { forwardRef } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";

const SelectField = forwardRef(({ error, label, options, ...props }, ref) => {
  return (
    <FormControl
      fullWidth
      size="small"
      error={Boolean(error)}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px",
        },
        "& .MuiFormHelperText-root": {
          minHeight: "14px",
          fontSize: { xs: "10px", md: "12px" },
          marginTop: "2px",
        },
      }}
    >
      <InputLabel>{label}</InputLabel>

      <Select value={props.value ?? ""} inputRef={ref} label={label} {...props}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>

      <FormHelperText>{error || " "}</FormHelperText>
    </FormControl>
  );
});

export default SelectField;
