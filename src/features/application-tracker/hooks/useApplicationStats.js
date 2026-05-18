import { useQuery } from "@tanstack/react-query";
import { getApplicationStats } from "../services/applicationService";

const useApplicationStats = () => {
  return useQuery({
    queryKey: ["applicationStats"],
    queryFn: getApplicationStats,
  });
};

export default useApplicationStats;
