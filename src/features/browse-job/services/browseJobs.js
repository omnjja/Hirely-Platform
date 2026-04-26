import api from "@/lib/api";

export const getJobs = async () => {
  const response = await api.get("/jobs");
  return response.data;
};
