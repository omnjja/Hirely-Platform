import { useMutation } from "@tanstack/react-query";
import * as registrationAPI from "../services/registrationService";
import toast from "react-hot-toast";

const useCandidateRegMutation = () => {
  return useMutation({
    mutationFn: registrationAPI.registerCandidate,

    onMutate: () => {
      toast.loading("Submitting your data... ⏳", {
        id: "candidateRegistrationToast",
      });
    },

    onSuccess: () => {
      toast.success(
        "Your registration was submitted successfully! 🎉",
        {
          id: "candidateRegistrationToast",
        },
      );
    },

    onError: (error) => {
      const message =
        error?.response?.data?.message ||
        "Failed to submit your application. Please try again.";
      toast.error(`${message} ❌`, { id: "candidateRegistrationToast" });
    },
  });
};

export default useCandidateRegMutation;
