import React, { forwardRef } from "react";
import TextField from "@mui/material/TextField";

const InputField = forwardRef(({ label, error, ...props }, ref) => {
  return (
    <TextField
      fullWidth
      label={label}
      size="small"
      error={Boolean(error)}
      inputRef={ref}
      helperText={error || " "}
      {...props}
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
    />
  );
});

export default InputField;
