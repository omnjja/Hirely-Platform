import api from "@/lib/api";

export const getApplicationStats = async () => {
  const res = await api.get("/jobs/applications/me/stats");
  return res.data;
};

export const getApplications = async () => {
  const res = await api.get("/jobs/applications/me");
  return res.data;
};
