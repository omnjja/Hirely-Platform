import React, { useState } from "react";
import MatchScoreRing from "./MatchScoreRing";
import RankBars from "./RankBars";
import StatusCell from "./StatusCell";
import ActionsCell from "./ActionsCell";
import Pagination from "./Pagination";
import ErrorComponent from "@/components/ui/ErrorComponent";
import CandidateTableSkeleton from "./loading-skeletons/CandidateTableSkeleton";
import TableHeader from "./TableHeader";

export default function CandidateTable({
  dashboardData,
  pagination,
  totalApplications,
  isLoading,
  error,
  page,
  setPage,
  refetch,
}) {
  const [editingRowId, setEditingRowId] = useState(null);
  const [viewSummary, setViewSummary] = useState(null);
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
            editingRowId === application?.candidate?.candidateId;
          const viewingSummary =
            viewSummary === application?.candidate?.candidateId;
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
                    onToggleEdit={() =>
                      setEditingRowId((prev) =>
                        prev === application?.candidate?.candidateId
                          ? null
                          : application?.candidate?.candidateId,
                      )
                    }
                    onToggleViewSummary={() =>
                      setViewSummary((prev) =>
                        prev === application?.candidate?.candidateId
                          ? null
                          : application?.candidate?.candidateId,
                      )
                    }
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
                  onChange={() => {}}
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
              editingRowId === application?.candidate?.candidateId;
            const viewingSummary =
              viewSummary === application?.candidate?.candidateId;

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
                    onChange={() => {}}
                  />
                </div>

                <ActionsCell
                  editing={isEditing}
                  viewing={viewingSummary}
                  onToggleEdit={() =>
                    setEditingRowId((prev) =>
                      prev === application?.candidate?.candidateId
                        ? null
                        : application?.candidate?.candidateId,
                    )
                  }
                  onToggleViewSummary={() =>
                    setViewSummary((prev) =>
                      prev === application?.candidate?.candidateId
                        ? null
                        : application?.candidate?.candidateId,
                    )
                  }
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* pagination */}
      <div className="border-t border-slate-100">
        <Pagination
          page={pagination?.page}
          totalPages={totalPages}
          onPageChange={(p) => {
            setPage(p);
            setEditingRowId(null);
            setViewSummary(null);
          }}
          rangeLabel={`Showing ${page}-${totalPages} of ${totalPages}`}
        />
      </div>
    </div>
  );
}
