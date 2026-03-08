// hooks/useChooseRoleMutation.ts
import { useMutation } from "@tanstack/react-query";
import { chooseRole } from "../services/registrationService";
import toast from "react-hot-toast";

const useChooseRoleMutation = () => {
  return useMutation({
    mutationFn: chooseRole,

    onMutate: () => {
      toast.loading("Setting your role... ⏳", { id: "chooseRoleToast" });
    },

    onSuccess: () => {
      toast.success("Role selected successfully! 🎉", {
        id: "chooseRoleToast",
      });
    },

    onError: (error) => {
      const message =
        error?.response?.data?.message ||
        "Failed to set role. Please try again.";
      toast.error(`${message} ❌`, { id: "chooseRoleToast" });
    },
  });
};

export default useChooseRoleMutation;
