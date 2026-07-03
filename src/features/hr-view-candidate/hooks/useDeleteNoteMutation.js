import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteApplicationNote } from "../services/HrService";

const useDeleteNoteMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutateFn: ({ applicationId, noteId }) =>
      deleteApplicationNote(applicationId, noteId),
    onSuccess: () => {
      queryClient.invalidateQueries(["applicationNotes"]);
    },
  });
};

export default useDeleteNoteMutation;
