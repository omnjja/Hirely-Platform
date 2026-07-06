import api from "@/lib/api";

export const getApplicationsDashboardData = async (
  jobId,
  page,
  limit,
  applicationStatus,
  matchScore,
) => {
  const response = await api.get(`/jobs/${jobId}/dashboard`, {
    params: { page, limit, applicationStatus, matchScore },
  });
  return response.data;
};

export const getApplicationSummary = async (jobId, applicationId) => {
  const response = await api.get(
    `/jobs/${jobId}/dashboard/applications/${applicationId}/summary`,
  );
  return response.data;
};

export const exportApplicationsAnalysis = async ({
  jobId,
  format,
  page,
  limit,
  applicationStatus,
  matchScore,
}) => {
  const response = await api.get(`/jobs/${jobId}/dashboard/export`, {
    params: { format, page, limit, applicationStatus, matchScore },
    responseType: "blob",
  });
  return response;
};

export const changeApplicationStatus = async (jobId, applicationId, status) => {
  const response = await api.patch(
    `/jobs/${jobId}/dashboard/applications/${applicationId}/status`,
    { applicationStatus: status },
  );
  console.log("update status: ", response.data);
  return response.data;
};
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