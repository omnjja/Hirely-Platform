import api from "@/lib/api";

export const getJobs = async () => {
  const response = await api.get("/jobs");
  return response.data;
};

export const getRecomendedJobs = async () => {
  const response = await api.get("/jobs/recommended");
  return response.data;
};

export const getRecentJobs = async () => {
  const response = await api.get("/jobs/recent");
  return response.data;
}

export const getJobDetailsById = async (id) => {
  const response = await api.get(`/jobs/${id}`);
  return response.data;
};

export const createJob = async (formData) => {
  const response = await api.post("/jobs", formData);
  return response.data;
};

export const updateJob = async (id, formData) => {
  const response = await api.patch(`/jobs/${id}`, formData);
  return response.data;
};

export const deleteJob = async (id) => {
  const response = await api.delete(`/jobs/${id}`);
  return response.data;
};
