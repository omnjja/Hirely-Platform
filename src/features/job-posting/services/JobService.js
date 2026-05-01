import api from "@/lib/api";

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
