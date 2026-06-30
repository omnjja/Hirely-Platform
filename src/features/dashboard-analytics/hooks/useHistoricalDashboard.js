import { useQuery } from "@tanstack/react-query";
import { getDashboardAnalytics } from "../services/dashboardService";

const useHistoricalDashboard = () => {
  return useQuery({
    queryKey: ["historicalDashboard"],
    queryFn: getDashboardAnalytics,
    refetchOnWindowFocus: false,
    staleTime: 5 * 1000 * 60,
  });
};

export default useHistoricalDashboard;
