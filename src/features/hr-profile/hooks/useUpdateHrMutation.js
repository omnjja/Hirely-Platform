import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateHrProfile } from "../services/JobService";

const useUpdateProfileMutation = ({ onSuccess } = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateHrProfile,
    onSuccess: async (...args) => {
      await queryClient.invalidateQueries({
        queryKey: ["hrProfile"],
      });
      onSuccess?.(...args);
    },
  });
};

export default useUpdateProfileMutation;
