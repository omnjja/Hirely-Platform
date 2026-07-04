import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteApplicationNote } from "../services/HrService";

const useDeleteNoteMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ applicationId, id }) =>
      deleteApplicationNote(applicationId, id),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["applicationData", variables.applicationId],
      });
    },
  });
};

export default useDeleteNoteMutation;
