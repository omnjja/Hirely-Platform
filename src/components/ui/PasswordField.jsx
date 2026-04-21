import React, { forwardRef, useState } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import FormHelperText from "@mui/material/FormHelperText";

const PasswordField = forwardRef(({ label, error, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl
      fullWidth
      variant="outlined"
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

      <OutlinedInput
        type={showPassword ? "text" : "password"}
        {...props}
        inputRef={ref}
        label={label}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={() => setShowPassword((p) => !p)} edge="end">
              {showPassword ? (
                <VisibilityOutlinedIcon />
              ) : (
                <VisibilityOffOutlinedIcon />
              )}
            </IconButton>
          </InputAdornment>
        }
      />

      <FormHelperText>{error || " "}</FormHelperText>
    </FormControl>
  );
});

export default PasswordField;
