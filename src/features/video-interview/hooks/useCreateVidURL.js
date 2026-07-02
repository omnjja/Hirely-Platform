import { useMutation } from "@tanstack/react-query";
import { createVideoUploadURL } from "../service/videoInterviewService";

const useCreateVidURL = () => {
  return useMutation({
    mutationFn: ({interviewId, questionId, requestBody}) =>
      createVideoUploadURL(interviewId, questionId, requestBody),
    refetchOnWindowFocus: false,
    staleTime: 5 * 1000 * 60,
  });
};

export default useCreateVidURL;
