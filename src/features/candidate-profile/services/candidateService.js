import api from "../../../lib/api";

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
  const { uploadUrl, key } = res.data;

  // upload file to storage using the presigned URL
  await fetch(uploadUrl, {
    method: "PUT",
    headers: { "Content-Type": file.type },
    body: file,
  });

  const res2 = await api.get("profile/photo");
  return res2.data;
};
