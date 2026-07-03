import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getApplicationSummary } from "../services/dashboardService";

export const useApplicationSummary = ({jobId, applicationId }) => {
  return useQuery({
    queryKey: ["applicationSummary", jobId, applicationId],
    queryFn: () => getApplicationSummary(jobId, applicationId),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    enabled: !!applicationId,
    placeholderData: keepPreviousData,
  });
};
