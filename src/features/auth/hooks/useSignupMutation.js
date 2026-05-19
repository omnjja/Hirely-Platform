import { useMutation } from "@tanstack/react-query";
import * as authAPI from "../services/authService";
import { useNavigate } from "react-router-dom";

export const useSignupMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authAPI.signup,
    onSuccess: (data) => {
      localStorage.setItem("authToken", data.accessToken);
      navigate("/role-selection");
    },
  });
};
