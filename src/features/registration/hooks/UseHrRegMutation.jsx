import { useMutation } from "@tanstack/react-query";
import { registerHR } from "../services/registrationService";
import useAppNavigate from "@/hooks/useAppNavigate";

const useHrRegMutation = () => {
  const { toHome } = useAppNavigate();
  return useMutation({
    mutationFn: registerHR,

    onSuccess: () => {
      toHome();
    },
  });
};

export default useHrRegMutation;
