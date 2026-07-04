import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCandidateProfile } from "../services/candidateService";

const useUpdateProfileMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateCandidateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["candidateProfile"],
      });
    },
  });
};

export default useUpdateProfileMutation;
