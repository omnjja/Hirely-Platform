import api from "@/lib/api";

export const getVideoSummary = async (applicationId) => {
  const res = await api.get(`/${applicationId}/interviewSummary`);
  return res.data;
};
