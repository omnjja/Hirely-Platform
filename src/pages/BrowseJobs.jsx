import ButtonComponent from "@/components/ui/ButtonComponent";
import SearchComponent from "@/components/ui/SearchComponent";
import FiltersBar from "@/features/jobs/browse-job/components/FiltersBar";
import Jobs from "@/features/jobs/browse-job/components/Jobs";
import useAppNavigate from "@/hooks/useAppNavigate";

const BrowseJobs = () => {
  const role = localStorage.getItem("userRole");
  const isRecruiter = role === "HR";
  const { toCreateJob } = useAppNavigate();

  return (
    <div className="flex flex-col">
      <div className="rounded-b-lg px-3 sm:px-4 pb-3 sm:pb-4 border-[#00000033]">
        <div className="flex flex-col gap-4 mt-4 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xl sm:text-3xl font-bold text-[#2E2E2E]">
            {isRecruiter ? "My Job Postings" : "Top Matches"}
          </p>
          <div className="flex flex-col items-center sm:flex-row gap-3 w-full lg:w-auto">
            <div className="w-full sm:flex-1 lg:w-auto">
              <SearchComponent />
            </div>
            {isRecruiter && (
              <ButtonComponent
                text="+ Post New Job"
                style={{
                  bgColor: "#ffffff",
                  textColor: "#1FA5A8",
                  bold: true,
                  shadow: "lg",
                }}
                onClick={() => toCreateJob()}
              />
            )}
          </div>
        </div>
        {!isRecruiter && (
          <div className="bg-white">
            <FiltersBar />
          </div>
        )}
      </div>

      <div className="w-full min-h-screen ">
        <Jobs />
      </div>
    </div>
  );
};

export default BrowseJobs;
