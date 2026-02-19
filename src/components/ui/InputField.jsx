import React from "react";
import TextField from "@mui/material/TextField";

const InputField = ({ label, error, onChange, name }) => {
  return (
    <div className="w-full">
      <TextField
        id="outlined-required"
        label={label}
        size="small"
        className="w-full"
        error={Boolean(error)}
        onChange={onChange}
        name={name}
        helperText={error ? error : ""}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
          },
        }}
      />
    </div>
  );
};

export default InputField;
