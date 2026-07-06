import useAppNavigate from "@/hooks/useAppNavigate";
import { useQueryClient } from "@tanstack/react-query";
import { logout } from "../services/authService";
import toast from "react-hot-toast";

export function useLogout() {
  const queryClient = useQueryClient();
  const { toLogin } = useAppNavigate();

  async function handleLogout() {
    try {
      await logout();
    } catch (error) {
      toast.error(error.message || "Logout failed. Please try again.");
    }
    localStorage.clear();
    queryClient.clear(); 
    toLogin();
  }

  return handleLogout;
}
