import { useQuery } from "@tanstack/react-query";
import { getInterviewSession } from "../service/videoInterviewService";

const useInterviewSession = ({ applicationId }) => {
  const query = useQuery({
    queryKey: ["interviewSession", applicationId],
    queryFn: () => getInterviewSession(applicationId),
    refetchOnWindowFocus: false,
    staleTime: 5 * 1000 * 60,
  });
  return { ...query };
};

export default useInterviewSession;
