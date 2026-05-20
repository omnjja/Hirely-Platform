import { getRecentJobs } from "@/features/jobs/services/jobService";
import { useQuery } from "@tanstack/react-query";

export const useRecentJobs = () => {
  return useQuery({
    queryKey: ["recentJobs"],
    queryFn: getRecentJobs,
    staleTime: 5 * 1000 * 60,
    refetchOnWindowFocus: false,
  });
};
