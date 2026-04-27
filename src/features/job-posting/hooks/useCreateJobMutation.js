import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createJob } from "../services/JobService";
import toast from "react-hot-toast";

export const useCreateJobMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createJob,
    onMutate: () => {
      toast.loading("Submitting", { id: "createJobToast" });
    },
    onSuccess: () => {
      toast.success("Job Posted successfully!", {
        id: "createJobToast",
      });
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          "Failed to post job. Please try again.",
        { id: "createJobToast" },
      );
    },
  });
};
