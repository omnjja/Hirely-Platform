import { useMutation } from "@tanstack/react-query";
import { saveVideoAnswer } from "../service/videoInterviewService";

const useSaveVideoAnswer = () => {
  return useMutation({
    mutationFn: ({ interviewId, requestBody }) =>
      saveVideoAnswer(interviewId, requestBody),
    refetchOnWindowFocus: false,
  });
};

export default useSaveVideoAnswer;
