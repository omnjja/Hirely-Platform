import { useQuery } from "@tanstack/react-query";
import { getApplicationById } from "../services/HrService";

const useApplicationData = ({ applicationId }) => {
  return useQuery({
    queryKey: ["applicationData", applicationId],
    queryFn: () => getApplicationById(applicationId),
    refetchOnWindowFocus: false,
    staleTime: 5 * 1000 * 60,
  });
};

export default useApplicationData;
