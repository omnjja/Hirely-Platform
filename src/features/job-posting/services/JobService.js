import api from "@/lib/api";

export const createJob = async (formData) => {
  const res = await api.post("/jobs", formData);
  return res.data;
};
