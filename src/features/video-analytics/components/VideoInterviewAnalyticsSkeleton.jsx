const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-slate-200 rounded ${className}`} />
);

const VideoInterviewAnalyticsSkeleton = () => (
  <div>
    {/* HeaderCardSkeleton  */}
    <div className="flex items-end justify-between">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-3 w-40" />
        <Skeleton className="h-6 w-64" />
        <Skeleton className="h-3 w-52" />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 items-start">
      <div className="flex flex-col gap-4">
        {/* OverallPerformanceCardSkeleton  */}
        <div className="flex flex-col gap-3 justify-center items-center p-4 border-2 border-l-[#1FA4A7] border-t-0 rounded-2xl">
          <Skeleton className="h-4 w-36" />
          <Skeleton className="w-32 h-32 rounded-full" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-[80%]" />
        </div>
        {/* CoreCompetenciesCardSkeleton  */}
        <div className="bg-[#0576D6] p-6 rounded-2xl flex flex-col gap-6">
          <Skeleton className="h-4 w-40 bg-blue-400" />
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-1.5">
              <div className="flex justify-between">
                <Skeleton className="h-3 w-28 bg-blue-400" />
                <Skeleton className="h-3 w-8 bg-blue-400" />
              </div>
              <Skeleton className="h-2 w-full rounded-full bg-blue-400" />
            </div>
          ))}
        </div>
      </div>
      <div className="md:col-span-2">
        {/* InterviewResponsesSkeleton */}
        <div>
          <Skeleton className="h-5 w-48 mb-4" />
          <div className="m-4">
            {/* FeedbackCardSkeleton */}
            {Array.from({ length: 3 }).map((_, i) => (
              <div className="grid grid-cols-3 gap-4 mb-4" key={i}>
                <div className="col-span-1">
                  <Skeleton className="w-full aspect-video rounded-xl" />
                </div>
                <div className="col-span-2">
                  <Skeleton className="h-4 w-[80%] mb-3" />
                  <div className="bg-slate-100 rounded-2xl p-3 border border-slate-200 flex flex-col gap-2">
                    <Skeleton className="h-3.5 w-28 mb-1" />
                    <Skeleton className="h-2.5 w-full" />
                    <Skeleton className="h-2.5 w-[90%]" />
                    <Skeleton className="h-2.5 w-[70%]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default VideoInterviewAnalyticsSkeleton;
