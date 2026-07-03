import { useMutation } from "@tanstack/react-query";
import { addApplicationNote } from "../services/HrService";
import toast from "react-hot-toast";

const useApplicationNoteMutation = () => {
  return useMutation({
    mutationFn: ({ applicationId, note }) =>
      addApplicationNote(applicationId, note),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries([
        "applicationData",
        variables.applicationId,
      ]);
      toast.success("Note added successfully!");
    },
    onError: () => {
      toast.error("Failed to add note. Please try again.");
    },
  });
};

export default useApplicationNoteMutation;
