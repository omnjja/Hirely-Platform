import { useMutation } from "@tanstack/react-query";
import * as authAPI from "../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useSignupMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authAPI.signup,
    onSuccess: (data) => {
      localStorage.setItem("authToken", data.accessToken);
      toast.success("Account created successfully!", { id: "signupToast" });
      navigate("/role-selection");
    },
    onError: () => {
      toast.dismiss("signupToast");
    },
  });
};

export default useSignupMutation;
