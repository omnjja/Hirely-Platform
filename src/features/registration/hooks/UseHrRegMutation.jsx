import { useMutation } from "@tanstack/react-query";
import { registerHR } from "../services/registrationService";
import toast from "react-hot-toast";
import useAppNavigate from "@/hooks/useAppNavigate";

const useHrRegMutation = () => {
  const { toHome } = useAppNavigate();
  return useMutation({
    mutationFn: registerHR,

    onMutate: () => {
      toast.loading("Submitting your data", {
        id: "hrRegistrationToast",
      });
    },

    onSuccess: (data) => {
      console.log(data);
      toast.success("Your are registrated successfully!", {
        id: "hrRegistrationToast",
      });
      toHome();
    },

    onError: () => {
      toast.dismiss("hrRegistrationToast");
    },
  });
};

export default useHrRegMutation;
