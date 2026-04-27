import api from "@/lib/api";

export const getJobs = async () => {
  const response = await api.get("/jobs");
  console.log(response.data)
  return response.data;
};
