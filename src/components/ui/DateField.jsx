import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller } from "react-hook-form";
import dayjs from "dayjs";

const DateField = ({hasLabel = false, label, error, control, name, required, rounded = "8px" }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {hasLabel && (
        <label htmlFor={name} className="block font-medium text-sm mb-1">
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            label={!hasLabel ? label : undefined}
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
                    borderRadius: rounded,
                  },
                  "& .MuiPickersOutlinedInput-notchedOutline": {
                    borderRadius: rounded,
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
