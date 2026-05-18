import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateProfilePicture } from "../services/candidateService";

const useUpdateProfilePicture = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProfilePicture,

    onMutate: () => {
      toast.loading("Uploading photo...", {
        id: "uploadPhoto",
      });
    },

    onSuccess: () => {
      toast.success("Photo updated successfully!", {
        id: "uploadPhoto",
      });

      // reload profile data
      queryClient.invalidateQueries(["candidateProfile"]);
    },

    onError: () => {
      toast.error("Failed to upload photo", {
        id: "uploadPhoto",
      });
    },
  });
};

export default useUpdateProfilePicture;
