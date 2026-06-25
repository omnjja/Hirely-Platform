import { useRef, useState } from "react";
import { Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { UploadCloud, FileText, X } from "lucide-react";
import clsx from "clsx";

const UploadCVField = ({
  label,
  labelClassName,
  accept = ".pdf,.doc,.docx",
  maxSizeMB = 10,
  control,
  name,
  errors,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        const handleFile = (f) => {
          if (!f) return;
          if (f.size > maxSizeMB * 1024 * 1024)
          onChange(f);
        };

        return (
          <div>
            <p
              className={clsx(
                "text-sm font-medium text-muted-foreground tracking-widest uppercase mb-3",
                labelClassName,
              )}
            >
              {label}
            </p>

            {/* Drop Zone */}
            <div
              onClick={() => inputRef.current.click()}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragging(false);
                handleFile(e.dataTransfer.files[0]);
              }}
              className={`border-2 border-dashed rounded-xl p-10 flex flex-col items-center gap-3 cursor-pointer transition
                ${
                  value
                    ? "border-green-400 bg-green-50"
                    : isDragging
                      ? "border-[#1B41AA] bg-blue-50"
                      : "border-[#a3a7a99c] hover:border-muted-foreground"
                }
                ${errors?.[name] ? "border-red-400" : ""}`}
            >
              <UploadCloud className="w-10 h-10 text-muted-foreground" />

              <div className="text-center">
                <p className="font-medium">Drop the JD PDF here</p>
                <p className="text-sm text-muted-foreground">
                  Max file size {maxSizeMB}MB
                </p>
              </div>

              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  inputRef.current.click();
                }}
              >
                Browse files
              </Button>

              <input
                ref={inputRef}
                type="file"
                accept={accept}
                className="hidden"
                onChange={(e) => handleFile(e.target.files[0])}
              />
            </div>

            {/* Error */}
            {errors?.[name] && (
              <p className="text-xs text-red-500 mt-1">
                {errors[name].message}
              </p>
            )}

            {value && (
              <div className="mt-3 flex items-center justify-between px-4 py-3 rounded-lg border bg-muted/40">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="text-sm font-medium">{value.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {(value.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  type="button"
                  onClick={() => onChange(null)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        );
      }}
    />
  );
};

export default UploadCVField;
