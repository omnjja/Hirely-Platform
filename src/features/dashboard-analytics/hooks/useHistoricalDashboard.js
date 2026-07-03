import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getDashboardAnalytics } from "../services/dashboardService";
import { useEffect } from "react";

const useHistoricalDashboard = ({ deptPage }) => {
  const queryClient = useQueryClient();
  // prefetch next page
  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ["historicalDashboard", deptPage + 1],
      queryFn: () => getDashboardAnalytics({ deptPage: deptPage + 1 }),
    });
  }, [deptPage]);
  return useQuery({
    queryKey: ["historicalDashboard", deptPage],
    queryFn: () => getDashboardAnalytics({ deptPage }),
    refetchOnWindowFocus: false,
    staleTime: 5 * 1000 * 60,
    placeholderData: (previousData) => previousData,
  });
};

export default useHistoricalDashboard;
