import api from "@/lib/api";

export const getDashboardAnalytics = async ({
  inflowFilter = "LAST_6_MONTHS",
  deptPage = 1,
  deptLimit = 10,
}) => {
  const params = {};
  params.inflow_filter = inflowFilter;
  params["volume_pagination[page]"] = deptPage;
  params["volume_pagination[limit]"] = deptLimit;

  const res = await api.get("/historicalDashboard", {
    params,
  });

  return res.data;
};

export const getActiveHiringProgress = async () => {
  const res = await api.get("/historicalDashboard/openings");
  return res.data;
};
