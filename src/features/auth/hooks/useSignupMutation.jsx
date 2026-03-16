import { useMutation } from "@tanstack/react-query";
import * as authAPI from "../services/authService";
import toast from "react-hot-toast";

const useSignupMutation = () => {
  return useMutation({
    mutationFn: authAPI.signup,
    onMutate: () => {
      toast.loading("Creating account... ⏳", { id: "signupToast" });
    },
    onSuccess: (data) => {
      console.log("Signup successful:", data);
      toast.success("Account created successfully! ✅", { id: "signupToast" });
    },
    onError: (error) => {
      console.error("Signup failed:", error);
      toast.error("Failed to create account. Please try again. ❌", {
        id: "signupToast",
      });
    },
  });
};

export default useSignupMutation;
