import api from "../../../lib/api";

export const signup = async (formData) => {
  const res = await api.post("auth/signup", formData);
  return res.data;
};

export const googleAuth = () => {
  window.location.href = "http://localhost:3000/auth/google/login";
};

export const login = async (data) => {
  const res = await api.post("auth/login", data);
  return res.data;
};

export const logout = async () => {
  await api.post("/auth/logout");
}

export const forgotPassword = async (email) => {
  const res = await api.post("/auth/forgot-password", { email });
  return res.data;
};

export const resetPassword = async (token, newPassword) => {
  const res = await api.post("/auth/reset-password", { token, newPassword });
  return res.data;
};
