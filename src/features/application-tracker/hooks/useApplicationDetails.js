import { useQuery } from "@tanstack/react-query";
import { getApplicationById } from "../services/applicationService";

const useApplicationDetails = (selectedId) => {
  return useQuery({
    queryKey: ["application-detail", selectedId],
    queryFn: () => getApplicationById(selectedId),
    enabled: !!selectedId,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};

export default useApplicationDetails;
