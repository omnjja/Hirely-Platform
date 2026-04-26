import { useQuery } from "@tanstack/react-query"
import { getJobs } from "../services/browseJobs"

const useJobs = () => {
    return useQuery({
      queryKey: ["jobs"],
      queryFn: getJobs,
      refetchOnWindowFocus: false,
      staleTime: 5 * 1000 * 60,
    });
}

export default useJobs
