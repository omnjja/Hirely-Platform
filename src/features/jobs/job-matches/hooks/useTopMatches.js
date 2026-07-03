import { useQuery } from "@tanstack/react-query";
import { getJobMatches } from "../../services/jobService";

const useTopMatches = () => {
  return useQuery({
    queryKey: ["top-matches"],
    queryFn: () => getJobMatches({ page: 1, limit: 5 }),
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });
};

export default useTopMatches;
