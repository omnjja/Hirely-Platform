import { useMutation } from "@tanstack/react-query";
import * as registrationAPI from "../services/registrationService";
import toast from "react-hot-toast";

const useHrRegMutation = () => {
  return useMutation({
    mutationFn: registrationAPI.registerHR,

    onMutate: () => {
      toast.loading("Submitting your data... ⏳", {
        id: "hrRegistrationToast",
      });
    },

    onSuccess: () => {
      toast.success(
        "Your company registration was submitted successfully! 🎉",
        {
          id: "hrRegistrationToast",
        },
      );
    },

    onError: (error) => {
      const message =
        error?.response?.data?.message ||
        "Failed to submit your application. Please try again.";
      toast.error(`${message} ❌`, { id: "hrRegistrationToast" });
    },
  });
};

export default useHrRegMutation;
