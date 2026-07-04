import api from "@/lib/api";

export const getVideoSummary = (applicationId) => {
  const res = api.get(`/${applicationId}/interviewSummary`);
  return res.data;
};
