import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as authAPI from "../services/authService";

export const useLoginMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: authAPI.login,
    onSuccess: async (data) => {
      const { accessToken, role, isProfileCompleted } = data;
      localStorage.setItem("authToken", accessToken);
      localStorage.setItem("userRole", role);
      localStorage.setItem("isProfileCompleted", isProfileCompleted);
      queryClient.clear();
    },
  });
};
