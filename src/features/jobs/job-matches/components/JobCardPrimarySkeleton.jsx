const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-slate-200 rounded ${className}`} />
);

const JobCardPrimarySkeleton = () => (
  <div className="border-l-4 border-l-[#1BA2A5] my-2">
    <div className="flex mb-6 items-center justify-between gap-10 border border-black rounded-3xl p-4">
      {/* avatar */}
      <div className="w-20 h-20 shrink-0 hidden md:flex rounded-full border-2 border-gray-200 items-center justify-center">
        <Skeleton className="w-16 h-16 rounded-full" />
      </div>

      <div className="flex-12 w-full">
        <div className="flex justify-between">
          {/* title + company */}
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-40 md:w-52" />
            <Skeleton className="h-3 w-32 md:w-44" />
          </div>
          {/* match score */}
          <div className="flex flex-col items-end gap-1.5 mt-1">
            <Skeleton className="h-8 w-14" />
            <Skeleton className="h-2.5 w-16" />
          </div>
        </div>

        {/* matched skills box */}
        <div className="bg-gray-100 border-[#00066633] border-l-4 mt-4 p-3 rounded-2xl flex flex-col gap-2">
          <Skeleton className="h-3 w-28" />
          <div className="flex flex-wrap gap-2 mt-1">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-6 w-16 rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default JobCardPrimarySkeleton;
