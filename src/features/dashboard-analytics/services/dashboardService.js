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
  console.log("summary: ", response.data);
  return response.data;
};
