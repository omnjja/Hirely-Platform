import api from "../../../lib/api";

export const registerHR = async (formData) => {
  const res = await api.post("/api/v1/auth/complete-registration/hr", formData);
  return res.data;
};

export const chooseRole = async (role) => {
  const res = await api.patch("/api/v1/auth/choose-role", role);
  return res.data;
};
