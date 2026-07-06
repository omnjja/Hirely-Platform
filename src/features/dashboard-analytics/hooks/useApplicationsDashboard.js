import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getApplicationsDashboardData } from "../services/dashboardService";

export const useApplicationsDashboard = ({
  jobId,
  page,
  limit,
  applicationStatus,
  matchScore,
}) => {
  return useQuery({
    queryKey: [
      "applicationsDashboard",
      jobId,
      page,
      applicationStatus,
      matchScore,
    ],
    queryFn: () =>
      getApplicationsDashboardData(
        jobId,
        page,
        limit,
        applicationStatus,
        matchScore,
      ),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    enabled: !!jobId,
    placeholderData: keepPreviousData, 
  });
};
