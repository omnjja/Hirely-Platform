import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteJob } from "../services/JobService";

export const useDeleteJobMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteJob(id),
    onMutate: () => {
      toast.loading("Deleting...", { id: "deleteJobToast" });
    },
    onSuccess: () => {
      toast.success("Job deleted successfully!", {
        id: "deleteJobToast",
      });
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          "Failed to delete job. Please try again.",
        { id: "deleteJobToast" },
      );
    },
  });
};
