import { useMutation } from "@tanstack/react-query";
import * as authAPI from "../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useSignupMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authAPI.signup,
    onMutate: () => {
      toast.loading("Creating account... ⏳", { id: "signupToast" });
    },
    onSuccess: (data) => {
      // console.log("Signup successful:", data);
      localStorage.setItem("authToken", data.accessToken);
      toast.success("Account created successfully!", { id: "signupToast" });
      navigate("/role-selection");
    },
    onError: () => {
      // console.error("Signup failed:", error);
      toast.error("Failed to create account. Please try again.", {
        id: "signupToast",
      });
    },
  });
};

export default useSignupMutation;
