import api from "@/lib/api";

export const getDashboardAnalytics = async () => {
  const res = await api.get("/historicalDashboard");
  return res.data;
};
