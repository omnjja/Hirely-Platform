import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller } from "react-hook-form";
import dayjs from "dayjs";

const DateField = ({ label, error, control, name }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            label={label}
            value={field.value ? dayjs(field.value) : null}
            onChange={(date) => field.onChange(date ? date.toISOString() : "")}
            slotProps={{
              textField: {
                fullWidth: true,
                size: "small",
                error: Boolean(error),
                helperText: error || " ",
                sx: {
                  "& .MuiPickersOutlinedInput-root": {
                    borderRadius: "8px",
                  },
                  "& .MuiPickersOutlinedInput-notchedOutline": {
                    borderRadius: "8px",
                  },
                  "& .MuiFormHelperText-root": {
                    minHeight: "14px",
                    fontSize: { xs: "10px", md: "12px" },
                    marginTop: "2px",
                  },
                },
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DateField;
