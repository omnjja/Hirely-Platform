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

export const applyToJob = async (id) => {
  const response = await api.post(`/jobs/${id}/apply`);
  return response.data;
};
