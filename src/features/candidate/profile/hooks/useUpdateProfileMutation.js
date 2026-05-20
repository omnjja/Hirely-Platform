import { useMutation } from "@tanstack/react-query";
import { updateCandidateProfile } from "../services/candidateService";

const useUpdateProfileMutation = () => {
  return useMutation({
    mutationFn: updateCandidateProfile,
  });
};

export default useUpdateProfileMutation;
