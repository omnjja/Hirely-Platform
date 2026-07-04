import { useQuery } from "@tanstack/react-query";
import { getVideoSummary } from "../services/videoService";

const useVideoSummary = ({ applicationId }) => {
  return useQuery({
    queryKey: ["videoSummary", applicationId],
    queryFn: () => getVideoSummary(applicationId),
    // enabled: !!applicationId,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });
};

export default useVideoSummary;
