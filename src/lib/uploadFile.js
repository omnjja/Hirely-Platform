import axios from "axios";

export const uploadFile = async ({
  uploadUrl,
  file,
  contentType,
  onProgress,
}) => {
  await axios.put(uploadUrl, file, {
    headers: {
      "Content-Type": contentType ?? file.type,
    },

    onUploadProgress: (event) => {
      if (!event.total) return;

      const progress = Math.round((event.loaded * 100) / event.total);

      onProgress?.(progress);
    },
  });
};