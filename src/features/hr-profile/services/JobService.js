import api from "@/lib/api";

export const getHrProfile = async () => {
  const res = await api.get("/profile/hr");
  return res.data;
};

export const updateHrProfile = async (payload) => {
  const res = await api.patch("/profile/hr", payload);
  return res.data;
};
