import { useQuery } from "@tanstack/react-query";
import { getHrProfile } from "../services/JobService";

const useHrProfile = () => {
  return useQuery({
    queryKey: ["hrProfile"],
    queryFn: getHrProfile,
    refetchOnWindowFocus: false,
    staleTime: 5 * 1000 * 60,
  });
};

export default useHrProfile;
