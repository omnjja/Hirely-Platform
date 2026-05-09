import api from "@/lib/api";

export const getHrProfile = async () => {
  const res = await api.get("/profile/hr");
  return res.data;
};
