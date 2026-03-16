import { useMutation } from "@tanstack/react-query";
import * as authAPI from "../services/authService";
import toast from "react-hot-toast";

const useLoginMutation = () => {
  return useMutation({
    mutationFn: authAPI.login,
    onMutate: () => {
      toast.loading("Signing in... ⏳", { id: "loginToast" });
    },
    onSuccess: (data) => {
      const { accessToken } = data;
      localStorage.setItem("authToken", accessToken);
      toast.success("Signed in successfully! ✅", { id: "loginToast" });
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message ||
          "Failed to sign in. Please try again. ❌",
        { id: "loginToast" },
      );
    },
  });
};

export default useLoginMutation;
