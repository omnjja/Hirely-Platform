import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateJob } from "../services/JobService";
import toast from "react-hot-toast";

export const useUpdateJobMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, formData }) => updateJob(id, formData),
    onMutate: () => {
      toast.loading("Saving changes...", { id: "updateJobToast" });
    },
    onSuccess: () => {
      toast.success("Job updated successfully!", {
        id: "updateJobToast",
      });
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          "Failed to update job. Please try again.",
        { id: "updateJobToast" },
      );
    },
  });
};
