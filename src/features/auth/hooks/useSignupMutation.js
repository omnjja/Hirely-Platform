import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as authAPI from "../services/authService";
import useAppNavigate from "@/hooks/useAppNavigate";

export const useSignupMutation = () => {
  const queryClient = useQueryClient();
  const { toRoleSelection } = useAppNavigate();
  return useMutation({
    mutationFn: authAPI.signup,
    onSuccess: async (data) => {
      localStorage.setItem("authToken", data.accessToken);
      queryClient.clear();
      toRoleSelection();
    },
  });
};
