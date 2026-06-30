import { useQuery } from "@tanstack/react-query";
import { getInstructions } from "../service/videoInterviewService";

const useInstructions = () => {
  const query = useQuery({
    queryKey: ["instructions"],
    queryFn: () => getInstructions(),
    refetchOnWindowFocus: false,
    staleTime: 5 * 1000 * 60,
  });
  return { ...query };
};

export default useInstructions;
