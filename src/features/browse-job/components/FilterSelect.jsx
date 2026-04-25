import React from "react";
import SelectField from "@/components/ui/SelectField";

const FilterSelect = ({
  options = [],
  resultsCount = 0,
  placeholder = "Select...",
  fullWidth = false,
  value,
  onChange,
  ...selectProps
}) => {
  const hasValue = Boolean(value);
  return (
    <div
      style={{
        position: "relative",
        display: fullWidth ? "flex" : "inline-flex",
        alignItems: "center",
        width: fullWidth ? "100%" : undefined,
        minWidth: 0,
      }}
    >
      <SelectField
        options={options}
        placeholder={placeholder}
        variant="default"
        size="small"
        fullWidth={fullWidth}
        value={value}
        onChange={onChange}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "16px !important",
            bgcolor: hasValue ? "#1A777E99" : "#F3F4F6",
            border: hasValue ? "1px solid #1A777E" : "1px solid #D1D5DB",
            transition: "all 0.25s ease",
            paddingRight: resultsCount > 0 ? "52px !important" : undefined,
          },
          "& .MuiOutlinedInput-notchedOutline": { border: "none" },
          minWidth: 120,
          maxWidth: "100%",
        }}
        style={{
          background: hasValue ? "#1A777E99" : "#F3F4F6",
          border: hasValue ? "1px solid #1A777E" : "1px solid #D1D5DB",
          transition: "all 0.25s ease",
          borderRadius: 16,
          minWidth: 120,
        }}
        {...selectProps}
      />
      {resultsCount > 0 && (
        <span
          style={{
            position: "absolute",
            right: 28,
            top: "28%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            background: "#F3F4F6",
            color: "#2E2E2E",
            borderRadius: "999px",
            fontSize: "11px",
            fontWeight: 600,
            lineHeight: 1,
            padding: "6px",
            whiteSpace: "nowrap",
            zIndex: 1,
          }}
        >
          +{resultsCount}
        </span>
      )}
    </div>
  );
};

export default FilterSelect;
