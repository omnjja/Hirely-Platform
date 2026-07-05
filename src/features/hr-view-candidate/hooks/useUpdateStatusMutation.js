import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateApplicationState } from "../services/HrService";

const useUpdateStatusMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ applicationId, status }) =>
      updateApplicationState(applicationId, status),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["applicationData", variables.applicationId],
      });
    },
  });
};

export default useUpdateStatusMutation;
