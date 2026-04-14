import api from "@/lib/api";
import axios from "axios";

const token = localStorage.getItem("authToken");
// The functions that will be used to get upload pre-signed URLs
export const getUploadImageURL = async (file) => {
  const res = await api.post("upload/image",
    {
      fileName: file.name,
      contentType: file.type
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  // return the upload URL and the image key (the path in S3) to be stored in the database
  return res.data;
};

export const getCVUploadURL = async (file) => {
  const res = await api.post("/upload/cv", {
    fileName: file.name,
    contentType: file.type
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("Received CV upload URL response:", res.data);
  return res.data;
};

// The functions that will be used to upload the image to S3 using the pre-signed URL
export const uploadImageToS3 = async (uploadURL, file) => {
  console.log("Uploading to S3 with URL:", uploadURL);
  const res = await axios.put(uploadURL, file, {
    headers: {
      "Content-Type": file.type,
    },
  });

  if (res.status !== 200) {
    throw new Error("Upload failed");
  }
};

export const uploadCVToS3 = async (uploadURL, file) => {
  console.log("Uploading to S3 with URL:", uploadURL);
  const res = await axios.put(uploadURL, file, {
    headers: {
      "Content-Type": file.type,
    },
  });

  if (res.status !== 200) {
    throw new Error("Upload failed");
  }
};
