import { useQuery } from "@tanstack/react-query";
import { getApplications } from "../services/applicationService";

const useApplicationData = ({ page, state }) => {
  return useQuery({
    queryKey: ["applications", page, state],
    queryFn: () => getApplications({ page, state }),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};

export default useApplicationData;
