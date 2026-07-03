const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-slate-200 rounded ${className}`} />
);

// CandidateSummary skeleton
const CandidateSummarySkeleton = () => (
  <div className="flex flex-col items-center justify-center gap-2 border border-black bg-white p-4 rounded-lg">
    <Skeleton className="w-28 h-28 rounded-full hidden md:block" />
    <Skeleton className="h-4 w-32 mt-1" />
    <div className="flex flex-row justify-between gap-4 w-full">
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          key={i}
          className="bg-[#F0F4F7] rounded-2xl flex flex-col p-2 flex-1 gap-1.5"
        >
          <Skeleton className="h-2 w-10" />
          <Skeleton className="h-3 w-16" />
        </div>
      ))}
    </div>
    <Skeleton className="h-7 w-44 rounded-2xl" />
    <Skeleton className="h-8 w-full rounded-2xl" />
  </div>
);

// CvPreviewCard skeleton
const CvPreviewCardSkeleton = () => (
  <div className="bg-[#EFF4F7] border border-black rounded-2xl p-5">
    <div className="flex items-center justify-between mb-4">
      <Skeleton className="h-3 w-20" />
      <Skeleton className="h-4 w-4 rounded" />
    </div>
    <div className="bg-white rounded-[8px] p-5 flex flex-col gap-2.5">
      <Skeleton className="h-3.5 w-[35%]" />
      <Skeleton className="h-2.5 w-[85%]" />
      <Skeleton className="h-2.5 w-[80%]" />
      <Skeleton className="h-3.5 w-[22%] mt-2" />
      <Skeleton className="h-2.5 w-[85%]" />
      <Skeleton className="h-2.5 w-[78%]" />
      <Skeleton className="h-2.5 w-[40%]" />
    </div>
  </div>
);

// CandidateMatch skeleton
const CandidateMatchSkeleton = () => (
  <div className="flex w-full gap-2 items-center bg-[#4C58A60D] border border-[#0A0A0A] rounded-xl p-5">
    <Skeleton className="shrink-0 h-40 w-40 rounded-full" />
    <div className="flex flex-col gap-3 w-full">
      <Skeleton className="h-5 w-52" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-[80%]" />
      <div className="flex gap-2 mt-1">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-6 w-16 rounded-2xl" />
        ))}
      </div>
    </div>
  </div>
);

// BehavioralAnalysis skeleton
const BehavioralAnalysisSkeleton = () => (
  <div className="border border-[#0A0A0A] rounded-xl bg-[#0576D6] p-3 flex flex-col gap-3">
    {/* video placeholder */}
    <Skeleton className="h-36 w-full rounded-lg bg-blue-400" />
    <Skeleton className="h-3.5 w-36 bg-blue-400" />
    <div className="grid grid-cols-2 gap-x-4 mt-1">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="mb-4 flex flex-col gap-1.5">
          <div className="flex justify-between">
            <Skeleton className="h-2.5 w-16 bg-blue-400" />
            <Skeleton className="h-2.5 w-8 bg-blue-400" />
          </div>
          <Skeleton className="h-2 w-full rounded-full bg-blue-400" />
        </div>
      ))}
    </div>
  </div>
);

// InterviewSummary skeleton
const InterviewSummarySkeleton = () => (
  <div className="border border-[#0A0A0A] rounded-xl p-3">
    <div className="flex justify-between items-center mb-2">
      <Skeleton className="h-3.5 w-20" />
      <Skeleton className="h-5 w-20 rounded-2xl" />
    </div>
    <div className="flex flex-col gap-2 mt-2 w-[80%]">
      <Skeleton className="h-2.5 w-full" />
      <Skeleton className="h-2.5 w-[90%]" />
      <Skeleton className="h-2.5 w-[75%]" />
    </div>
  </div>
);

// RecruiterNotes skeleton
const RecruiterNotesSkeleton = () => (
  <div className="md:mt-3 border border-[#0A0A0A] rounded-xl p-3">
    <div className="flex items-center gap-1 mb-3">
      <Skeleton className="h-3.5 w-3.5 rounded" />
      <Skeleton className="h-3.5 w-28" />
    </div>
    <div className="flex flex-col gap-2 mb-4">
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          key={i}
          className="bg-[#F7F9FB] border border-slate-200 rounded-lg p-3 flex justify-between"
        >
          <div className="flex flex-col gap-1.5 w-full">
            <Skeleton className="h-2.5 w-[80%]" />
            <Skeleton className="h-2.5 w-[60%]" />
            <Skeleton className="h-2 w-20 mt-1" />
          </div>
          <div className="flex gap-1.5 shrink-0">
            <Skeleton className="w-6 h-6 rounded-md" />
            <Skeleton className="w-6 h-6 rounded-md" />
          </div>
        </div>
      ))}
    </div>
    <Skeleton className="h-12 w-full rounded-lg mb-2" />
    <Skeleton className="h-8 w-24 rounded-lg" />
  </div>
);

// Main skeleton — mirrors ViewCandidate layout exactly
const ViewCandidateSkeleton = () => (
  <div className="flex flex-col md:flex-row gap-4 m-5">
    {/* Left column */}
    <div className="md:flex-1 flex flex-row md:flex-col gap-3">
      <div className="flex-1">
        <CandidateSummarySkeleton />
      </div>
      <div className="flex-1">
        <CvPreviewCardSkeleton />
      </div>
    </div>

    {/* Right column */}
    <div className="md:flex-4 flex flex-col gap-4">
      <CandidateMatchSkeleton />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <BehavioralAnalysisSkeleton />
        <div className="flex flex-row md:flex-col gap-4">
          <div className="flex-1">
            <InterviewSummarySkeleton />
          </div>
          <div className="flex-1">
            <RecruiterNotesSkeleton />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ViewCandidateSkeleton;
