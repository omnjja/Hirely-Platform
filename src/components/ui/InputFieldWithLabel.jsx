import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Controller } from "react-hook-form";

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
    <div className="mb-1">
      <div className="font-medium text-sm">
        {label}
        {required && <span style={{ color: "#ef4444" }}> *</span>}
      </div>

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <>
            <TextField
              {...field}
              {...props}
              select={Boolean(options)} // if options exist, make it a select
              fullWidth
              size="small"
              error={Boolean(error)}
              helperText={error?.message || " "}
              multiline={!options && Boolean(fieldHeight)} // if it's not a select and has fieldHeight, make it multiline
              rows={!options && fieldHeight ? 4 : undefined}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  alignItems: "flex-start",
                  bgcolor: "#F9FAFB",
                },
                "& textarea": {
                  color: "#717182",
                },
                "& input": {
                  color: "#717182",
                },
                "& .MuiFormHelperText-root": {
                  marginTop: 0,
                  fontSize: "12px",
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
                className="font-medium text-xs"
                style={{
                  color: bottomTextColor,
                  marginTop: "-14px",
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
