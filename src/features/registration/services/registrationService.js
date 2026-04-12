import api from "../../../lib/api";

export const registerHR = async (formData) => {
  const res = await api.post("/auth/complete-registration/hr", formData);
  return res.data;
};

export const chooseRole = async (role) => {
  const res = await api.patch("/auth/choose-role", { role });
  return res.data;
};

export const registerCandidate = async (formData) => {
  const res = await api.post("/auth/complete-registration/candidate", formData);
  return res.data;
};
