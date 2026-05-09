import { useMutation, useQueryClient } from "@tanstack/react-query";
import { applyToJob } from "../../services/jobService";
import toast from "react-hot-toast";

export const useApplyJobMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => applyToJob(id),

    onMutate: async (id) => {
      toast.loading("Applying...", { id: "applyJob" });

      await queryClient.cancelQueries({ queryKey: ["jobs"] });
      await queryClient.cancelQueries({ queryKey: ["job", id] });

      const previousJobs = queryClient.getQueryData({ queryKey: ["jobs"] });
      const previousJob = queryClient.getQueryData({ queryKey: ["job", id] });

      queryClient.setQueryData({ queryKey: ["jobs"] }, (old) =>
        old?.map((job) =>
          job.id === id ? { ...job, isCandidateApply: true } : job,
        ),
      );
      queryClient.setQueryData({ queryKey: ["job", id] }, (old) =>
        old ? { ...old, isCandidateApply: true } : old,
      );

      return { previousJobs, previousJob };
    },

    onSuccess: (data, id) => {
      const { application } = data;
      toast.success(application.nextStepTitle, { id: "applyJob" });

      queryClient.setQueryData({ queryKey: ["jobs"] }, (old) =>
        old?.map((job) =>
          job.id === id ? { ...job, isCandidateApply: true } : job,
        ),
      );
      queryClient.setQueryData({ queryKey: ["job", id] }, (old) =>
        old ? { ...old, isCandidateApply: true } : old,
      );
      
      queryClient.invalidateQueries({ queryKey: ["job", id] });
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },

    onError: (error, id, context) => {
      if (context?.previousJobs)
        queryClient.setQueryData({ queryKey: ["jobs"] }, context.previousJobs);
      if (context?.previousJob)
        queryClient.setQueryData(
          { queryKey: ["job", id] },
          context.previousJob,
        );

      toast.error(
        error?.response?.data?.message ||
          "Failed to submit application. Please try again.",
        { id: "applyJob" },
      );
    },
  });
};
