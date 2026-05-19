import { useMutation } from "@tanstack/react-query";
import * as authAPI from "../services/authService";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: authAPI.login,
    onSuccess: (data) => {
      const { accessToken, role, isProfileCompleted } = data;
      localStorage.setItem("authToken", accessToken);
      localStorage.setItem("userRole", role);
      localStorage.setItem("isProfileCompleted", isProfileCompleted);
    },
  });
};

