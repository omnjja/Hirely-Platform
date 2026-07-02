import { useQuery } from "@tanstack/react-query";
import { getDashboardAnalytics } from "../services/dashboardService";

const useHistoricalDashboard = ({ deptPage }) => {
  return useQuery({
    queryKey: ["historicalDashboard", deptPage],
    queryFn: () => getDashboardAnalytics({ deptPage }),
    refetchOnWindowFocus: false,
    staleTime: 5 * 1000 * 60,
  });
};

export default useHistoricalDashboard;
