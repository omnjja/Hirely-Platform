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
