import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCv } from "../services/candidateService";
import toast from "react-hot-toast";

const useUpdateCvMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCv,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["candidateProfile"],
      });
      toast.success("CV uploaded successfully.");
    },
    onError: () => {
      toast.error("Failed to upload CV. Please try again.");
    },
  });
};

export default useUpdateCvMutation;
