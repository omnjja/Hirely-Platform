import { useQuery } from "@tanstack/react-query";
import { getJobMatches } from "../services/JobService";

const useTopMatches = () => {
  return useQuery({
    queryKey: ["top-matches"],
    queryFn: async () => {
      const data = await getJobMatches();
      return data;
    },
  });
};

export default useTopMatches;
