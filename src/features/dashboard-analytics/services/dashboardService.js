import api from "@/lib/api";

export const getDashboardAnalytics = async ({ deptPage = 1 }) => {
  const res = await api.get("/historicalDashboard", {
    // params: {
    //   dept_page: deptPage,
    // },
  });

  return res.data;
};

export const getActiveHiringProgress = async () => {
  const res = await api.get("/historicalDashboard/openings");
  return res.data;
};
