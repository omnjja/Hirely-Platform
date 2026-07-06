import { useQuery } from "@tanstack/react-query";
import { getJobMatches } from "../../services/jobService";

const useTopMatches = ({ limit }) => {
  return useQuery({
    queryKey: ["top-matches", limit],
    queryFn: () => getJobMatches({ page: 1, limit: limit }),
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });
};

export default useTopMatches;
