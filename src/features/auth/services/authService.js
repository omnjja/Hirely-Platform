import api from "../../../lib/api";

export const signup = async (formData) => {
  // const res = await api.post("/api/v1/auth/signup", formData);
  const res = await api.post("auth/signup", formData);
  return res.data;
};

export const login = async (data) => {
  const res = await api.post("auth/login", data);
  return res.data;
};
