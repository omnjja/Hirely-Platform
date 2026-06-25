import { useMutation } from "@tanstack/react-query";
import * as registrationAPI from "../services/registrationService";

const useCandidateRegMutation = () => {
  return useMutation({
    mutationFn: registrationAPI.registerCandidate,
  });
};

export default useCandidateRegMutation;
