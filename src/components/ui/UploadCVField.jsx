import React from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { Controller } from "react-hook-form";

const UploadCVField = ({
  name,
  control,
  label,
  required,
  rules,
  bottomText,
  bottomTextColor = "#6A7282",
}) => {
  return (
    <div className="my-4">
      <div className="font-medium text-sm mb-3">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </div>

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange }, fieldState: { error } }) => (
          <>
            <label
              className="
                py-2
                px-4  
                bg-[#F3F4F6]
                border border-gray-300
                rounded-lg
                cursor-pointer
                hover:bg-gray-100
                transition
              "
            >
              <FileUploadOutlinedIcon className="text-gray-500" />
              <span className="text-gray-700 text-sm font-medium">
                Upload CV
              </span>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                hidden
                onChange={(e) => onChange(e.target.files[0])}
              />
            </label>

            {error && (
              <p className="text-red-500 text-xs font-medium mt-2">
                {error.message}
              </p>
            )}
            {bottomText && (
              <div
                className="text-xs font-medium mt-2"
                style={{
                  color: bottomTextColor,
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

export default UploadCVField;
