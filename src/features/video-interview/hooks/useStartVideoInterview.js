import { useMutation } from "@tanstack/react-query";
import { startInterviewSession } from "../service/videoInterviewService";

const useStartVideoInterview = (applicationId) => {
  return useMutation({
    mutationKey: ["StartInterviewSession", applicationId],
    mutationFn: () => startInterviewSession(applicationId),
    refetchOnWindowFocus: false,
    staleTime: 5 * 1000 * 60,
  });
};

export default useStartVideoInterview;
