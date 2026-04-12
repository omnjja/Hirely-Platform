import { useMutation } from "@tanstack/react-query";
import { chooseRole } from "../services/registrationService";
import toast from "react-hot-toast";
import useAppNavigate from "@/hooks/useAppNavigate";

const useChooseRoleMutation = () => {
  const { toRegisterCandidate, toRegisterHr } = useAppNavigate();
  return useMutation({
    mutationFn: chooseRole,
    onMutate: () => {
      toast.loading("Setting your role", { id: "chooseRoleToast" });
    },

    onSuccess: (data) => {
      toast.success("Role selected successfully!", {
        id: "chooseRoleToast",
      });
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

export default useChooseRoleMutation;
