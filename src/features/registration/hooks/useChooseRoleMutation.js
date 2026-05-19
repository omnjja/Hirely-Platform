import { useMutation } from "@tanstack/react-query";
import { chooseRole } from "../services/registrationService";
import toast from "react-hot-toast";
import useAppNavigate from "@/hooks/useAppNavigate";

export const useChooseRoleMutation = () => {
  const { toRegisterCandidate, toRegisterHr } = useAppNavigate();
  return useMutation({
    mutationFn: chooseRole,
    onSuccess: (data) => {
      data.role === "CANDIDATE" ? toRegisterCandidate() : toRegisterHr();
    },

    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          "Failed to set role. Please try again.",
        { id: "chooseRoleToast" },
      );
    },
  });
};
