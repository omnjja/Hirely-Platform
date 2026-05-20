import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as authAPI from "../services/authService";
import { useNavigate } from "react-router-dom";

export const useSignupMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authAPI.signup,
    onSuccess: async (data) => {
      localStorage.setItem("authToken", data.accessToken);
      navigate("/role-selection");
      await queryClient.invalidateQueries({
        refetchType: "all",
      });
    },
  });
};
