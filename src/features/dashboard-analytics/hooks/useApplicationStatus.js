import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeApplicationStatus } from "../services/dashboardService";
import toast from "react-hot-toast";

export const useApplicationStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ jobId, applicationId, status }) =>
      changeApplicationStatus(jobId, applicationId, status),

    onMutate: () => {
      toast.loading("Updating candidate status...", { id: "editAppStatus" });
    },
    onSuccess: () => {
      toast.success("Candidate status updated", {
        id: "editAppStatus",
      });
      queryClient.invalidateQueries({ queryKey: ["applicationsDashboard"] });
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          "Failed to update candidate status. Please try again.",
        { id: "editAppStatus" },
      );
    },
  });
};
