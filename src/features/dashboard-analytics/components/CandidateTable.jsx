import React from "react";
import MatchScoreRing from "./MatchScoreRing";
import RankBars from "./RankBars";
import StatusCell from "./StatusCell";
import ActionsCell from "./ActionsCell";
import Pagination from "./Pagination";
import ErrorComponent from "@/components/ui/ErrorComponent";
import CandidateTableSkeleton from "./loading-skeletons/CandidateTableSkeleton";
import TableHeader from "./TableHeader";
import { useAnalysisFilterationStore } from "../store/AnalysisFilterationStore";
import { useCandidateAppSummaryStore } from "../store/applicationSummaryStore";

export default function CandidateTable({
  dashboardData,
  pagination,
  totalApplications,
  isLoading,
  error,
  refetch,
}) {
  const page = useAnalysisFilterationStore((state) => state.page);
  const {
    editingApplicationId,
    setEditingApplicationId,
    viewingSummaryId,
    setViewingSummaryId,
  } = useCandidateAppSummaryStore();

  const totalPages = Math.ceil(totalApplications / (pagination?.limit || 10));

  if (isLoading) return <CandidateTableSkeleton />;
  if (error) return <ErrorComponent error={error} action={() => refetch()} />;

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[#0A0A0A]">
      {/* mobile card */}
      <div className="md:hidden bg-white">
        {dashboardData?.map((application) => {
          const tone = application.matchScore >= 50 ? "blue" : "rose";
          const isEditing =
            editingApplicationId === application?.candidate?.candidateId;
          const viewingSummary =
            viewingSummaryId === application?.candidate?.candidateId;
          return (
            <div
              key={application?.candidate?.candidateId}
              className="border-b border-slate-300 p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-teal-100" />
                  <div>
                    <p className="font-bold text-[#2A3439]">
                      {application?.candidate?.name}
                    </p>
                    <p className="text-xs text-[#566166]">
                      {application?.candidate?.role}
                    </p>
                  </div>
                </div>

                <div>
                  <ActionsCell
                    editing={isEditing}
                    viewing={viewingSummary}
                    onToggleEdit={setEditingApplicationId}
                    onToggleViewSummary={setViewingSummaryId}
                  />
                </div>
              </div>

              <div className="mt-4 flex justify-center items-center gap-3">
                <RankBars
                  label="CV RANK"
                  value={application?.indicators?.cvRank}
                  tone={tone}
                />

                <RankBars
                  label="ENGLISH"
                  value={application?.indicators?.english}
                  tone={tone}
                />

                <RankBars
                  label="BODY LANG"
                  value={application?.indicators?.bodyLanguage}
                  tone={tone}
                />

                <MatchScoreRing score={application?.candidate?.match || 0} />
              </div>

              <div className="mt-4 flex justify-evenly">
                <StatusCell
                  status={application?.application?.applicationStatus}
                  editing={isEditing}
                  onToggleEdit={setEditingApplicationId}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* desktop table */}
      <div className="hidden md:block">
        <TableHeader />

        <div className="divide-y divide-slate-100 bg-white">
          {dashboardData?.map((application) => {
            const tone = application.matchScore >= 50 ? "blue" : "rose";
            const isEditing =
              editingApplicationId === application?.candidate?.candidateId;
            const viewingSummary =
              viewingSummaryId === application?.candidate?.candidateId;

            return (
              <div
                key={application?.candidate?.candidateId}
                className="grid grid-cols-[2.2fr_1fr_1.6fr_1fr_0.7fr] items-center px-5 py-4"
              >
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-teal-100" />
                  <div>
                    <p className="font-bold text-[#2A3439]">
                      {application?.candidate?.name}
                    </p>
                    <p className="text-xs text-[#566166]">
                      {application?.candidate?.role}
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <MatchScoreRing score={application?.candidate?.match || 0} />
                </div>

                {/* indicators */}
                <div className="flex justify-center gap-5">
                  <RankBars
                    label="CV RANK"
                    value={application.indicators.cvRank}
                    tone={tone}
                  />
                  <RankBars
                    label="ENGLISH"
                    value={application?.indicators?.english}
                    tone={tone}
                  />
                  <RankBars
                    label="BODY LANG"
                    value={application?.indicators?.bodyLanguage}
                    tone={tone}
                  />
                </div>

                <div className="flex justify-center">
                  <StatusCell
                    status={application?.application?.applicationStatus}
                    editing={isEditing}
                    onToggleEdit={setEditingApplicationId}
                  />
                </div>

                <ActionsCell
                  editing={isEditing}
                  viewing={viewingSummary}
                  onToggleEdit={() =>
                    setEditingApplicationId(application?.candidate?.candidateId)
                  }
                  onToggleViewSummary={() =>
                    setViewingSummaryId(application?.candidate?.candidateId)
                  }
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* pagination */}
      {totalApplications >= 1 ? (
        <div className="border-t border-slate-100">
          <Pagination
            page={pagination?.page}
            totalPages={totalPages}
            rangeLabel={`Showing ${page}-${totalPages} of ${totalPages}`}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 py-12 text-center">
          <h3 className="text-lg font-semibold text-gray-900">
            No Applications Found
          </h3>
          <p className="max-w-sm text-xs sm:max-w-md sm:text-sm text-gray-500">
            No candidates have applied yet or no results match your filters.
          </p>
        </div>
      )}
    </div>
  );
}
