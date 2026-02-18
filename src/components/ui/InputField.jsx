import React from "react";
import TextField from "@mui/material/TextField";

const InputField = ({ label }) => {
  return (
    <div className="w-full">
      <TextField
        id="outlined-required"
        label={label}
        size="small"
        className="w-full"
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
