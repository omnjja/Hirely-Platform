import { useQuery } from "@tanstack/react-query";
import { getActiveHiringProgress } from "../services/dashboardService";

const useActiveHiringProgress = () => {
  return useQuery({
    queryKey: ["activeHiringProgress"],
    queryFn: getActiveHiringProgress,
    refetchOnWindowFocus: false,
    staleTime: 5 * 1000 * 60,
  });
};

export default useActiveHiringProgress;
