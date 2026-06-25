import api from "@/lib/api";

export const getJobMatches = async () => {
  const res = await api.get("/jobs/top-matches");
  return res.data;
};
