import { useMutation, useQueryClient } from "@tanstack/react-query";
import { applyToJob } from "../../services/jobService";
import toast from "react-hot-toast";

export const useApplyJobMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => applyToJob(id),
    onMutate: () => toast.loading("Applying...", { id: "applyJob" }),

    onSuccess: (data, id) => {
      const { application, job } = data;
      console.log(job.isCandidateApply);
      toast.success(application.nextStepTitle, { id: "applyJob" });
      queryClient.invalidateQueries(["job", id]);
    },
    onError: (error) =>
      toast.error(
        error?.response?.data?.message ||
          "Failed to submit application. Please try again.",
        { id: "applyJob" },
      ),
  });
};
