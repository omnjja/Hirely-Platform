const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-slate-200 rounded ${className}`} />
);
const JobCardSecondarySkeleton = () => (
  <div className="border-l-4 border-l-[#006A6266] my-4 p-2">
    <Skeleton className="h-4 w-10 mb-2" /> {/* score */}
    <Skeleton className="h-4 w-36 mb-1.5" /> {/* title */}
    <Skeleton className="h-3 w-28 mb-3" /> {/* company . location */}
    <div className="flex flex-wrap gap-2">
      {Array.from({ length: 3 }).map((_, i) => (
        <Skeleton key={i} className="h-6 w-14 rounded-2xl" />
      ))}
    </div>
  </div>
);

export default JobCardSecondarySkeleton;