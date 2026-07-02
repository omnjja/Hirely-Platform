import { useMutation } from "@tanstack/react-query";
import { submitInterview } from "../service/videoInterviewService";

const useSubmitInterview = () => {
  return useMutation({
    mutationFn: (interviewId ) => submitInterview(interviewId),
    refetchOnWindowFocus: false,
  });
};

export default useSubmitInterview;
