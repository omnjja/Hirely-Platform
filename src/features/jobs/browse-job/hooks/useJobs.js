import { useQuery } from "@tanstack/react-query";
import { getJobs } from "../../services/jobService";
import { useState } from "react";

const useJobs = () => {
  const [page, setPage] = useState(1);
  const query = useQuery({
    queryKey: ["jobs"],
    queryFn: getJobs,
    refetchOnWindowFocus: false,
    staleTime: 5 * 1000 * 60,
    placeholderData: (prev) => prev,
  });
  return { ...query, page, setPage };
};

export default useJobs;
