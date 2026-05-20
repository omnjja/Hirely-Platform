import { useQuery } from "@tanstack/react-query";
import { getJobDetailsById } from "../../services/jobService";
import { useParams } from "react-router-dom";

const useJobDetails = () => {
  const { id } = useParams();

  return useQuery({
    queryKey: ["jobs", id],
    queryFn: () => getJobDetailsById(id),
    refetchOnWindowFocus: false,
    staleTime: 5 * 1000 * 60,
  });
};

export default useJobDetails;
