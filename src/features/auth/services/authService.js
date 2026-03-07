import api from "../../../lib/api";

export const signup = async (formData) => {
  const res = await api.post("/api/v1/auth/signup", formData);
  return res.data;
};

