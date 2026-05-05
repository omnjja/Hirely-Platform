import { getRecomendedJobs } from "@/features/jobs/services/jobService";
import { useQuery } from "@tanstack/react-query";

export const useRecomendedJobs = () => {
  return useQuery({
    queryKey: ["recomendedJobs"],
    queryFn: getRecomendedJobs(),
    staleTime: 5 * 1000 * 60,
    refetchOnWindowFocus: false,
  });
};
