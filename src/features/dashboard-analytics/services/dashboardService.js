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
  console.log("candidates table: ", response.data);
  return response.data;
};
