import api from "@/lib/api";

export const getCandidateProfile = async () => {
  const res = await api.get("/profile");
  return res.data;
};

export const updateCandidateProfile = async (profileData) => {
  const res = await api.patch("/profile", profileData);
  return res.data;
};

export const updateProfilePicture = async (file) => {
  const res = await api.patch("profile/photo", {
    fileName: file.name,
    contentType: file.type,
  });
  const { uploadUrl } = res.data;

  // upload file to storage using the presigned URL
  await fetch(uploadUrl, {
    method: "PUT",
    headers: { "Content-Type": file.type },
    body: file,
  });
  return res.data;
};

export const updateCv = async (file) => {
  const res = await api.put("upload/cv", {
    fileName: file.name,
    contentType: file.type,
  });
  const { uploadUrl } = res.data;
  await fetch(uploadUrl, {
    method: "PUT",
    headers: {
      "Content-Type": file.type,
    },
    body: file,
  });
  return res.data;
};
