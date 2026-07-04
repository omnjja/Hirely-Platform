import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfilePicture } from "../services/candidateService";

const useUpdateProfilePicture = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProfilePicture,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["candidateProfile"],
      });
    },
  });
};

export default useUpdateProfilePicture;
