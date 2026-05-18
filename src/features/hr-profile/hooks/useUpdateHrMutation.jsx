import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateHrProfile } from "../services/JobService";

const useUpdateProfileMutation = () => {
  return useMutation({
    mutationFn: updateHrProfile,
    onMutate: () => {
      toast.loading("Updating profile... ", { id: "updateProfileToast" });
    },
    onSuccess: (data) => {
      toast.success("Profile updated successfully!", {
        id: "updateProfileToast",
      });
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message ||
          "Failed to update profile. Please try again.",
        { id: "updateProfileToast" },
      );
    },
  });
};

export default useUpdateProfileMutation;
