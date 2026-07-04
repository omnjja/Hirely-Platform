import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateApplicationNote } from "../services/HrService";
import toast from "react-hot-toast";

const useUpdateNoteMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ applicationId, noteId, updatedNote }) =>
      updateApplicationNote(applicationId, noteId, updatedNote),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["applicationData", variables.applicationId],
      });
      toast.success("Note updated");
    },

    onError: (error) => {
      console.log(error.response?.data);
      toast.error("Failed to update note");
    },
  });
};

export default useUpdateNoteMutation;
