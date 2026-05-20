import JobForm from "@/features/jobs/job-posting/components/JobForm";

const CreateJobPosting = () => {
  return (
    <div className="flex-1 w-full min-h-screen px-3 sm:px-5">
      <JobForm mode={"post"} />
    </div>
  );
};

export default CreateJobPosting;
