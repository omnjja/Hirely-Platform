export const statusOptions = [
  { value: "INTERVIEW", label: "Interview" },
  { value: "ACCEPTED", label: "Accepted" },
  { value: "REJECTED", label: "Rejected" },
];

export const matchingScoreOptions = [
  { value: "80", label: "Match Score: >80%" },
  { value: "60", label: "Match Score: 60-80%" },
  { value: "40", label: "Match Score: 40-60%" },
  { value: "0", label: "Match Score: <40%" },
];

export const STATUS_CONFIG = {
  APPLIED: {
    label: "Applied",
    className: "bg-sky-100 text-sky-700",
  },
  IN_REVIEW: {
    label: "In Review",
    className: "bg-slate-200 text-slate-600",
  },
  SHORTLISTED: {
    label: "Shortlisted",
    className: "bg-indigo-100 text-indigo-700",
  },
  PENDING: {
    label: "Pending",
    className: "bg-amber-100 text-amber-700",
  },
  CV_FAILED: {
    label: "CV Failed",
    className: "bg-red-100 text-red-700",
  },
  INTERVIEW: {
    label: "Interview",
    className: "bg-violet-100 text-violet-700",
  },
  ACCEPTED: {
    label: "Accepted",
    className: "bg-green-100 text-green-700",
  },
  REJECTED: {
    label: "Rejected",
    className: "bg-rose-100 text-rose-700",
  },
};
export const STATUS_OPTIONS = Object.entries(STATUS_CONFIG).map(
  ([value, cfg]) => ({
    value,
    label: cfg.label,
  }),
);
