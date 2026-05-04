import api from "@/lib/api";

export const getJobs = async () => {
  const response = await api.get("/jobs");
  return response.data;
};

export const getJobDetailsById = async (id) => {
  const response = await api.get(`/jobs/${id}`);
  return response.data;
};

export const createJob = async (formData) => {
  const res = await api.post("/jobs", formData);
  return res.data;
};

export const updateJob = async (id, formData) => {
  const res = await api.patch(`/jobs/${id}`, formData);
  return res.data;
};

export const deleteJob = async (id) => {
  const res = await api.delete(`/jobs/${id}`);
  return res.data;
};
