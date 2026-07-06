import { useMutation } from "@tanstack/react-query";
import { exportApplicationsAnalysis } from "../services/dashboardService";

export const useExportApplicationsAnalysis = () => {
  return useMutation({
    mutationFn: ({
      jobId,
      format,
      page,
      limit,
      applicationStatus,
      matchScore,
    }) =>
      exportApplicationsAnalysis({
        jobId,
        format,
        page,
        limit,
        applicationStatus,
        matchScore,
      }),
  });
};
