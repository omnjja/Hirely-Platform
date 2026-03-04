import React, { useRef } from "react";
import UploadIcon from "@mui/icons-material/Upload";

const FileUploadField = ({ label, required, error, onChange }) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (onChange) {
      onChange(e.target.files[0]);
    }
  };

  return (
    <div
      className="flex flex-col gap-2
     mb-4"
    >
      {/* Label */}
      <label className="text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <div className="flex items-center gap-4">
        {/* Circle Upload Button */}
        <div
          onClick={handleClick}
          className="w-20 h-20 flex items-center justify-center
                     rounded-full border border-gray-300
                     cursor-pointer hover:bg-gray-100 transition"
        >
          <UploadIcon className="text-gray-500" />
        </div>

        {/* Fake Input */}
        <div className="flex-1">
          <div
            onClick={handleClick}
            className={`w-full border rounded-lg px-3 py-2 text-sm cursor-pointer
            ${error ? "border-red-500" : "border-gray-300"}`}
          >
            No file chosen
          </div>

          <p className="text-blue-600 text-sm mt-1 cursor-pointer">
            Upload a professional photo
          </p>
        </div>
      </div>

      {error && <p className="text-red-500 text-xs">{error}</p>}

      {/* Hidden Input */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUploadField;
