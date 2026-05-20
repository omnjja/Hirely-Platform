import React from "react";

const ApplicationDetailSkeleton = () => (
  <div className="min-h-screen bg-[#F7F9FC] pb-16 animate-pulse">
    {/* top bar */}
    <div className="bg-white border-b border-gray-100 px-4 md:px-8 py-4 flex items-center gap-4">
      <div className="h-4 w-12 bg-gray-200 rounded" />
      <div className="h-4 w-px bg-gray-200" />
      <div className="h-4 w-48 bg-gray-200 rounded" />
    </div>

    <div className="max-w-4xl mx-auto px-4 md:px-8 mt-6 space-y-6">
      {/* hero card */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="h-1.5 w-full bg-gray-200" />
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gray-200" />
              <div className="space-y-2">
                <div className="h-5 w-40 bg-gray-200 rounded" />
                <div className="h-4 w-28 bg-gray-200 rounded" />
              </div>
            </div>
            <div className="h-6 w-20 rounded-full bg-gray-200" />
          </div>
          <div className="flex flex-wrap gap-4 pt-1">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-4 w-24 bg-gray-200 rounded" />
            ))}
          </div>
        </div>
      </div>

      {/* two-column body */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* left (2/3) */}
        <div className="md:col-span-2 space-y-6">
          {/* progress card */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
            <div className="h-4 w-36 bg-gray-200 rounded" />
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <React.Fragment key={i}>
                  <div className="w-7 h-7 rounded-full bg-gray-200" />
                  {i < 4 && <div className="flex-1 h-0.5 bg-gray-200" />}
                </React.Fragment>
              ))}
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200" />
            <div className="h-14 w-full rounded-xl bg-gray-100" />
          </div>
          {/* text sections */}
          {[0, 1].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 p-6 space-y-3"
            >
              <div className="h-4 w-32 bg-gray-200 rounded" />
              <div className="h-3 w-full bg-gray-200 rounded" />
              <div className="h-3 w-5/6 bg-gray-200 rounded" />
              <div className="h-3 w-4/6 bg-gray-200 rounded" />
            </div>
          ))}
        </div>

        {/* right (1/3) */}
        <div className="space-y-6">
          {/* score ring */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col items-center gap-3">
            <div className="h-3 w-20 bg-gray-200 rounded" />
            <div className="w-20 h-20 rounded-full bg-gray-200" />
            <div className="h-3 w-32 bg-gray-200 rounded" />
          </div>
          {/* timeline */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5 space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex justify-between">
                <div className="h-3 w-16 bg-gray-200 rounded" />
                <div className="h-3 w-24 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
          {/* skills */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5 space-y-3">
            <div className="h-3 w-14 bg-gray-200 rounded" />
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-6 w-16 rounded-full bg-gray-200" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ApplicationDetailSkeleton;
