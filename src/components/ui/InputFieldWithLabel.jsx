import React, { forwardRef } from "react";
import TextField from "@mui/material/TextField";

const InputFieldWithLabel = forwardRef(
  (
    {
      name,
      label,
      required,
      bottomText,
      bottomTextColor = "#6A7282",
      fieldHeight,
      error,
      labelStyle = "block font-medium text-sm mb-1",
      ...props
    },
    ref,
  ) => {
    return (
      <div className="mb-3">
        <label htmlFor={name} className={labelStyle}>
          {label}
          {required && <span style={{ color: "#ef4444" }}> *</span>}
        </label>
        <>
          <TextField
            {...props}
            id={name}
            name={name}
            fullWidth
            size="small"
            inputRef={ref}
            error={Boolean(error)}
            helperText={bottomText || error || " "}
            multiline={Boolean(fieldHeight)}
            rows={fieldHeight ? 4 : undefined}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                bgcolor: "#F9FAFB",
                alignItems: "flex-start",
              },
              "& .MuiFormHelperText-root": {
                mt: 0.5,
                ml: 0,
                color: error ? "#ef4444" : bottomTextColor,
                fontSize: { xs: "10px", sm: "11px", md: "12px" },
              },
              "& input, & textarea": {
                color: "#717182",
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
              },
            }}
          ></TextField>
        </>
      </div>
    );
  },
);

export default InputFieldWithLabel;
