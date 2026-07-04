import { useRef, useState } from "react";
import { FileText, Upload, ExternalLink, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import useUpdateCvMutation from "../../hooks/useUpdateCvMutation";

const CvSection = ({ cv }) => {
  const fileInputRef = useRef(null);

  const { mutateAsync: uploadCv, isPending: isUploading } =
    useUpdateCvMutation();

  const fullUrl = cv || null;

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.type !== "application/pdf") {
      toast.error("Only PDF files are allowed.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File must be under 5MB.");
      return;
    }
    uploadCv(file);
    e.target.value = "";
  };

  return (
    <div className="flex flex-row gap-3 mt-2">
      {fullUrl ? (
        <a
          href={fullUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 hover:shadow-sm transition-shadow group"
        >
          <div className="flex items-center gap-3">
            <FileText size={18} className="text-[#0576D6] shrink-0" />
            <span className="text-sm font-medium text-gray-700">
              View Current CV
            </span>
          </div>
          <ExternalLink
            size={15}
            className="text-gray-400 group-hover:text-[#0576D6] transition-colors"
          />
        </a>
      ) : (
        <p className="text-sm text-gray-400">No CV uploaded yet.</p>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={handleFileChange}
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        disabled={isUploading}
        className="flex items-center gap-2 self-start px-4 py-2 rounded-lg border border-dashed border-[#1B41AA] text-[#1B41AA] text-sm font-medium hover:bg-[#1B41AA]/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isUploading ? (
          <Loader2 size={15} className="animate-spin" />
        ) : (
          <Upload size={15} />
        )}
        {isUploading ? "Uploading..." : fullUrl ? "Replace CV" : "Upload CV"}
      </button>
    </div>
  );
};

export default CvSection;
