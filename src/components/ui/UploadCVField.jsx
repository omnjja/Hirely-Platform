import React from "react";
import { useState } from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const UploadCVField = ({
  label,
  required,
  error,
  register,
  name,
  onFileSelect,
  bottomText,
  bottomTextColor = "#6A7282",
}) => {
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState("");
  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  const { ref: inputRef, onChange: rhfOnChange, ...rest } = register(name);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!allowedTypes.includes(file.type)) {
        setFileError(
          "Invalid file type. Please upload a PDF or Word document.",
        );
        setFileName("");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setFileError("File size must be less than 5MB");
        setFileName("");
        return;
      }
      setFileError("");

      setFileName(`${file.name} (${(file.size / 1024).toFixed(1)} KB)`);
      if (onFileSelect) {
        onFileSelect(file);
      }
    }
    rhfOnChange(e);
  };

  return (
    <div className="my-4">
      <div className="font-medium text-sm mb-3">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </div>

      {!fileName && (
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
          inline-flex
          items-center
          gap-2
        "
        >
          <FileUploadOutlinedIcon className="text-gray-500" />

          <span className="text-gray-700 text-sm font-medium">Upload CV</span>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            hidden
            ref={inputRef}
            {...rest}
            onChange={handleFileChange}
          />
        </label>
      )}

      {fileName && (
        <div
          className="
            flex
            items-center
            justify-between
            border
            border-gray-300
            rounded-lg
            px-4
            py-2
            bg-gray-50
          "
        >
          <div className="flex items-center gap-2">
            <DescriptionOutlinedIcon className="text-gray-500" />

            <span className="text-sm text-gray-700 font-medium truncate max-w-[220px]">
              {fileName}
            </span>
          </div>
          <label className="text-blue-600 text-xs cursor-pointer hover:underline">
            Change
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              hidden
              ref={inputRef}
              {...rest}
              onChange={(e) => {
                handleFileChange(e);
                onChange(e);
              }}
            />
          </label>
        </div>
      )}

      {(error || fileError) && (
        <p className="text-red-500 text-xs font-medium mt-2">
          {fileError || error}
        </p>
      )}

      {bottomText && (
        <div
          className="text-xs font-medium mt-2"
          style={{ color: bottomTextColor }}
        >
          {bottomText}
        </div>
      )}
    </div>
  );
};

export default UploadCVField;
