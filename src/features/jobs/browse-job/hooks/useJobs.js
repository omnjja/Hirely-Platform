import { useQuery } from "@tanstack/react-query";
import { getJobs } from "../../services/jobService";

const useJobs = ({
  page,
  limit,
  search,
  jobType,
  experienceLevel,
  workplaceType,
  location,
  industry,
  datePosted,
  applied,
}) => {
  const query = useQuery({
    queryKey: [
      "jobs",
      page,
      limit,
      search,
      jobType,
      experienceLevel,
      workplaceType,
      location,
      industry,
      datePosted,
      applied,
    ],
    queryFn: () =>
      getJobs({
        page,
        limit,
        search,
        jobType,
        experienceLevel,
        workplaceType,
        location,
        industry,
        datePosted,
        applied,
      }),
    refetchOnWindowFocus: false,
    staleTime: 5 * 1000 * 60,
    placeholderData: (prev) => prev,
  });
  return { ...query };
};

export default useJobs;
