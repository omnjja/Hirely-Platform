import React, { useRef, useState } from "react";
import UploadIcon from "@mui/icons-material/Upload";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const UploadProfilePictureField = ({
  label,
  required,
  error,
  onPhotoSelect,
  name,
  bottomText,
  register,
  bottomTextColor = "#6A7282",
}) => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState("");
  const [filePreview, setFilePreview] = useState(null);
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

  const { ref: inputRef, onChange: rhfOnChange, ...rest } = register(name);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!allowedTypes.includes(file.type)) {
      setFileError("Invalid file type. Only JPG/PNG allowed.");
      setFileName("");
      setFilePreview(null);
      e.target.value = "";
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setFileError("File size must be less than 2MB.");
      setFileName("");
      setFilePreview(null);
      e.target.value = "";
      return;
    }
    setFileError("");
    const reader = new FileReader();
    reader.onloadend = () => {
      setFilePreview(reader.result);
    };
    reader.readAsDataURL(file);
    setFileName(`${file.name} (${(file.size / 1024).toFixed(1)} KB)`);

    if (onPhotoSelect) onPhotoSelect(file);

    rhfOnChange(e);
  };

  return (
    <div className="flex flex-col gap-2 mb-4">
      <label className="text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <div className="flex items-center gap-4">
        <div
          onClick={handleClick}
          className="w-20 h-20 flex items-center justify-center
                     rounded-full border border-gray-300
                     cursor-pointer hover:bg-gray-100 transition"
        >
          {filePreview ? (
            <img
              src={filePreview}
              alt="Preview"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <UploadIcon className="text-gray-500" />
          )}
        </div>

        <div className="flex-1 flex flex-col gap-1">
          {!fileName ? (
            <div
              onClick={handleClick}
              className={`w-full border rounded-lg px-3 py-2 text-sm cursor-pointer ${
                error || fileError ? "border-red-500" : "border-gray-300"
              }`}
            >
              No file chosen
            </div>
          ) : (
            <div className="w-full flex items-center justify-between border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
              <div className="flex items-center gap-2">
                <DescriptionOutlinedIcon className="text-gray-500" />
                <span className="text-sm text-gray-700 font-medium truncate max-w-[180px]">
                  {fileName}
                </span>
              </div>
              <span
                onClick={handleClick}
                className="text-blue-600 text-xs cursor-pointer hover:underline"
              >
                Change
              </span>
            </div>
          )}

          {bottomText && (
            <div
              className="text-xs font-medium"
              style={{ color: bottomTextColor }}
            >
              {bottomText}
            </div>
          )}
        </div>
      </div>

      {(error || fileError) && (
        <div className="mt-2 text-xs text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-1 font-medium">
          {error || fileError}
        </div>
      )}

      {/* Hidden Input */}
      <input
        type="file"
        ref={(e) => {
          inputRef(e);
          fileInputRef.current = e;
        }}
        className="hidden"
        accept=".jpg,.jpeg,.png"
        {...rest}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default UploadProfilePictureField;
