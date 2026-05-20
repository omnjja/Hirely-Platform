import { useMutation } from "@tanstack/react-query";
import { updateHrProfile } from "../services/JobService";

const useUpdateProfileMutation = () => {
  return useMutation({
    mutationFn: updateHrProfile,
  });
};

export default useUpdateProfileMutation;
