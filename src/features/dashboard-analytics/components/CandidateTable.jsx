import React, { useState } from "react";
import MatchScoreRing from "./MatchScoreRing";
import RankBars from "./RankBars";
import StatusCell from "./StatusCell";
import ActionsCell from "./ActionsCell";
import Pagination from "./Pagination";
import { candidates } from "@/constants/applicationsAnalysis";

export default function CandidateTable() {
  const PAGE_SIZE = 4;
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(candidates);
  const [editingRowId, setEditingRowId] = useState(null);
  const [viewSummary, setViewSummary] = useState(null);

  const totalPages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const pageRows = rows.slice(start, start + PAGE_SIZE);

  const handleStatusChange = (id, newStatus) => {
    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, status: newStatus } : row)),
    );
    setEditingRowId(null);
  };

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[#0A0A0A]">
      {/* mobile card */}
      <div className="md:hidden bg-white">
        {pageRows.map((candidate) => {
          const tone = candidate.matchScore >= 60 ? "blue" : "rose";
          const isEditing = editingRowId === candidate.id;
          const viewingSummary = viewSummary === candidate.id;

          return (
            <div key={candidate.id} className="border-b border-slate-300 p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-teal-100" />
                  <div>
                    <p className="font-bold text-[#2A3439]">{candidate.name}</p>
                    <p className="text-xs text-[#566166]">{candidate.role}</p>
                  </div>
                </div>
                <div>
                  <ActionsCell
                    editing={isEditing}
                    viewing={viewingSummary}
                    onToggleEdit={() =>
                      setEditingRowId((prev) =>
                        prev === candidate.id ? null : candidate.id,
                      )
                    }
                    onToggleViewSummary={() =>
                      setViewSummary((prev) =>
                        prev === candidate.id ? null : candidate.id,
                      )
                    }
                  />
                </div>
              </div>

              <div className="mt-4 flex justify-center items-center gap-3">
                <RankBars
                  label="CV RANK"
                  value={candidate.indicators.cvRank}
                  tone={tone}
                />
                <RankBars
                  label="ENGLISH"
                  value={candidate.indicators.english}
                  tone={tone}
                />
                <RankBars
                  label="BODY LANG"
                  value={candidate.indicators.bodyLang}
                  tone={tone}
                />
                <MatchScoreRing score={candidate.matchScore} />
              </div>

              <div className="mt-4 flex justify-evenly">
                <StatusCell
                  status={candidate.status}
                  editing={isEditing}
                  onChange={(newStatus) =>
                    handleStatusChange(candidate.id, newStatus)
                  }
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* desktop table */}
      <div className="hidden md:block">
        <div className="grid grid-cols-[2.2fr_1fr_1.6fr_1fr_0.7fr] items-center bg-[#E8EFF3] px-5 py-3.5 border-b border-[#0A0A0A]">
          <span className="text-base font-bold text-[#62748e]">
            CANDIDATE / ROLE
          </span>
          <span className="text-center text-base font-bold text-[#566166]">
            MATCH SCORE
          </span>
          <span className="text-center text-base font-bold text-[#62748e]">
            VISUAL INDICATORS
          </span>
          <span className="text-center text-base font-bold text-[#62748e]">
            STATUS
          </span>
          <span className="text-right text-base font-bold text-[#62748e]">
            ACTIONS
          </span>
        </div>

        <div className="divide-y divide-slate-100 bg-white">
          {pageRows.map((candidate) => {
            const tone = candidate.matchScore >= 60 ? "blue" : "rose";
            const isEditing = editingRowId === candidate.id;
            const viewingSummary = viewSummary === candidate.id;

            return (
              <div
                key={candidate.id}
                className="grid grid-cols-[2.2fr_1fr_1.6fr_1fr_0.7fr] items-center px-5 py-4"
              >
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-teal-100" />
                  <div>
                    <p className="font-bold text-[#2A3439]">{candidate.name}</p>
                    <p className="text-xs text-[#566166]">{candidate.role}</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <MatchScoreRing score={candidate.matchScore} />
                </div>

                <div className="flex justify-center gap-5">
                  <RankBars
                    label="CV RANK"
                    value={candidate.indicators.cvRank}
                    tone={tone}
                  />
                  <RankBars
                    label="ENGLISH"
                    value={candidate.indicators.english}
                    tone={tone}
                  />
                  <RankBars
                    label="BODY LANG"
                    value={candidate.indicators.bodyLang}
                    tone={tone}
                  />
                </div>

                <div className="flex justify-center">
                  <StatusCell
                    status={candidate.status}
                    editing={isEditing}
                    onChange={(newStatus) =>
                      handleStatusChange(candidate.id, newStatus)
                    }
                  />
                </div>

                <ActionsCell
                  editing={isEditing}
                  viewing={viewingSummary}
                  onToggleEdit={() =>
                    setEditingRowId((prev) =>
                      prev === candidate.id ? null : candidate.id,
                    )
                  }
                  onToggleViewSummary={() =>
                    setViewSummary((prev) =>
                      prev === candidate.id ? null : candidate.id,
                    )
                  }
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-t border-slate-100">
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={(p) => {
            setPage(p);
            setEditingRowId(null);
            setViewSummary(null);
          }}
          rangeLabel={`Showing ${start + 1}-${Math.min(
            start + PAGE_SIZE,
            rows.length,
          )} of ${rows.length}`}
        />
      </div>
    </div>
  );
}
