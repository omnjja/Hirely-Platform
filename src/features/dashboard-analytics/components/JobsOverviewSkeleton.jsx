import Skeleton from "@/components/ui/Skeleton";

const JobsOverviewSkeleton = () => {
  return (
    <div className="ml-3 mr-3 md:mr-0 my-3 flex flex-col gap-6">
      {/* DashboardStats */}
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-[8px] shadow p-4 flex flex-col gap-2"
          >
            <Skeleton className="h-2.5 w-20" />
            <Skeleton className="h-6 w-14" />
            <Skeleton className="h-2 w-28" />{" "}
          </div>
        ))}
      </div>

      {/* ApplicantInflowCard + RecruitmentFunnelCard */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* ApplicantInflowCard */}
        <div className="flex-2 bg-white rounded-2xl border border-black p-6">
          <div className="flex items-start justify-between mb-5">
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3.5 w-40" />
              <Skeleton className="h-2.5 w-52" />
            </div>
            <Skeleton className="h-6 w-28 rounded-full" />
          </div>
          {/* Bar chart placeholder */}
          <div className="relative h-56 flex items-end gap-2 px-2">
            {[60, 75, 90, 65, 80, 100].map((h, i) => (
              <Skeleton
                key={i}
                className="flex-1 rounded"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          {/* Footer stats */}
          <div className="flex justify-around mt-4 pt-4 border-t border-slate-100">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5">
                <Skeleton className="h-2.5 w-16" />
                <Skeleton className="h-3.5 w-20" />
              </div>
            ))}
          </div>
        </div>

        {/* RecruitmentFunnelCard */}
        <div className="flex-1 bg-white rounded-2xl border border-black p-6">
          <Skeleton className="h-3.5 w-36 mb-2" />
          <Skeleton className="h-2.5 w-28 mb-5" />
          <div className="space-y-3">
            {[100, 58, 18, 5].map((w, i) => (
              <Skeleton
                key={i}
                className="h-10 rounded"
                style={{ width: `${Math.max(w, 20)}%` }}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-slate-100 text-center">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <Skeleton className="h-2.5 w-24" />
                <Skeleton className="h-6 w-14" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DepartmentVolumeCard */}
      <div className="bg-white rounded-2xl border border-black p-6">
        <div className="flex items-center justify-between mb-5">
          <Skeleton className="h-3.5 w-40" />
          <Skeleton className="h-5 w-5 rounded" />
        </div>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="mb-4">
            <div className="flex justify-between mb-1">
              <Skeleton className="h-3 w-36" />
              <Skeleton className="h-3 w-24" />
            </div>
            <Skeleton className="h-3 w-full rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsOverviewSkeleton;
