import api from "@/lib/api";

// The functions that will be used to get upload pre-signed URLs
export const getUploadImageURL = async (file) => {
  const res = await api.post("/upload/image", {
    params: { fileName: file.name, contentType: file.type },
  });
  // return the upload URL and the image key (the path in S3) to be stored in the database
  return res.data;
};

export const getCVUploadURL = async (file) => {
  const res = await api.post("/upload/cv", {
    params: { fileName: file.name, contentType: file.type },
  });
  return res.data;
};

// The functions that will be used to upload the image to S3 using the pre-signed URL
export const uploadImageToS3 = async (uploadURL, file) => {
  const res = await api.put(uploadURL, file, {
    headers: {
      "Content-Type": file.type,
    },
  });

  if (!res.ok) {
    throw new Error("Upload failed");
  }
};

export const uploadCVToS3 = async (uploadURL, file) => {
  const res = await api.put(uploadURL, file, {
    headers: {
      "Content-Type": file.type,
    },
  });

  if (!res.ok) {
    throw new Error("Upload failed");
  }
};
