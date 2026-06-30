const InterviewInstructionsSkeleton = () => {
  return (
    <div className="w-135 mx-auto min-h-[70vh] flex flex-col items-center justify-center">
      <div className="animate-pulse rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-6 h-7 w-135 rounded bg-gray-200" />
        <div className="space-y-4">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-1 h-5 w-5 rounded-full bg-gray-200" />

              <div className="flex-1 space-y-2">
                <div className="h-4 w-full rounded bg-gray-200" />
                {index === 1 || index === 3 ? (
                  <div className="h-4 w-3/4 rounded bg-gray-200" />
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 h-11 w-full rounded-lg bg-gray-200" />
      </div>
    </div>
  );
};

export default InterviewInstructionsSkeleton;
