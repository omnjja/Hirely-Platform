import api from "../../../lib/api";

export const getCandidateProfile = async () => {
  const res = await api.get("/profile");
  return res.data;
};
