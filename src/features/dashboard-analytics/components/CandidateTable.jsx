import React, { useState } from "react";
import MatchScoreRing from "./MatchScoreRing";
import RankBars from "./RankBars";
import StatusCell from "./StatusCell";
import ActionsCell from "./ActionsCell";
import Pagination from "./Pagination";

const candidates = [
  {
    id: 1,
    name: "Malak Elbehairy",
    role: "Senior UX Designer",
    avatar: null,
    matchScore: 90,
    indicators: { cvRank: 4, english: 5, bodyLang: 3 },
    status: "shortlisted",
  },
  {
    id: 2,
    name: "Younis",
    role: "Visual Design Lead",
    avatar: null,
    matchScore: 80,
    indicators: { cvRank: 3, english: 4, bodyLang: 5 },
    status: "in_review",
  },
  {
    id: 3,
    name: "Sarah Wael",
    role: "UI Developer",
    avatar: null,
    matchScore: 45,
    indicators: { cvRank: 2, english: 2, bodyLang: 1 },
    status: "rejected",
  },
  {
    id: 4,
    name: "Alaa Ahmed",
    role: "Product Strategist",
    avatar: null,
    matchScore: 85,
    indicators: { cvRank: 4, english: 4, bodyLang: 5 },
    status: "interview",
  },
];

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
      <div className="grid grid-cols-[2.2fr_1fr_1.6fr_1fr_0.7fr] items-center bg-[#E8EFF3] px-5 py-3.5 border border-b-[#0A0A0A]">
        <span className="text-base font-bold tracking-wide text-[#62748e]">
          CANDIDATE / ROLE
        </span>
        <span className="text-center text-base font-bold tracking-wide text-[#566166]">
          MATCH SCORE
        </span>
        <span className="text-center text-base font-bold tracking-wide text-[#62748e]">
          VISUAL INDICATORS
        </span>
        <span className="text-center text-base font-bold tracking-wide text-[#62748e]">
          STATUS
        </span>
        <span className="text-right text-base font-bold tracking-wide text-[#62748e]">
          ACTIONS
        </span>
      </div>

      {/* Rows */}
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
              {/* Candidate / role */}
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 shrink-0 rounded-lg bg-teal-100" />
                <div>
                  <p className="text-base font-bold text-[#2A3439]">
                    {candidate.name}
                  </p>
                  <p className="text-xs text-[#566166]">{candidate.role}</p>
                </div>
              </div>

              {/* Match score */}
              <div className="flex justify-center">
                <MatchScoreRing score={candidate.matchScore} />
              </div>

              {/* Visual indicators */}
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

              {/* Status */}
              <div className="flex justify-center">
                <StatusCell
                  status={candidate.status}
                  editing={isEditing}
                  onChange={(newStatus) =>
                    handleStatusChange(candidate.id, newStatus)
                  }
                />
              </div>

              {/* Actions */}
              <ActionsCell
                editing={isEditing}
                onToggleEdit={() =>
                  setEditingRowId((prev) =>
                    prev === candidate.id ? null : candidate.id,
                  )
                }
                viewing={viewingSummary}
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

      <div className="border-t border-slate-100">
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={(p) => {
            setPage(p);
            setEditingRowId(null);
            setViewSummary(null);
          }}
          rangeLabel={`Showing ${start + 1}-${Math.min(start + PAGE_SIZE, rows.length)} of ${rows.length}`}
        />
      </div>
    </div>
  );
}
