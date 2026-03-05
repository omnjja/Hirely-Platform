import React from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const InputFieldWithLabel = ({
  name,
  control,
  label,
  rules,
  required,
  options,
  bottomText,
  bottomTextColor = "#6A7282",
  fieldHeight,
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
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <>
            <TextField
              {...field}
              {...props}
              id={name}
              select={Boolean(options)}
              fullWidth
              size="small"
              error={Boolean(error)}
              helperText={error?.message || " "}
              multiline={!options && Boolean(fieldHeight)}
              rows={!options && fieldHeight ? 4 : undefined}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#F9FAFB",
                  alignItems: "flex-start",
                },
                "& .MuiFormHelperText-root": {
                  mt: 0.5,
                  fontSize: { xs: "10px", sm: "11px", md: "12px" },
                },
                "& input, & textarea": {
                  color: "#717182",
                  fontSize: { xs: "14px", sm: "15px", md: "16px" },
                },
              }}
            >
              {options &&
                options.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    disabled={option.value === ""}
                  >
                    {option.label}
                  </MenuItem>
                ))}
            </TextField>

            {bottomText && (
              <div
                style={{
                  color: bottomTextColor,
                  fontSize: "12px",
                  marginTop: 2,
                }}
              >
                {bottomText}
              </div>
            )}
          </>
        )}
      />
    </div>
  );
};

export default InputFieldWithLabel;
