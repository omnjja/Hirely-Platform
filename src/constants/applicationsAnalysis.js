export const statusOptions = [
  { value: "APPLIED", label: "Applied" },
  { value: "IN_REVIEW", label: "In Review" },
  { value: "SHORTLISTED", label: "Shortlisted" },
  { value: "INTERVIEW", label: "Interview" },
  { value: "ACCEPTED", label: "Accepted" },
  { value: "REJECTED", label: "Rejected" },
];

export const matchingScoreOptions = [
  { value: 80, label: "Match Score: >80%" },
  { value: 60, label: "Match Score: 60-80%" },
  { value: 40, label: "Match Score: 40-60%" },
  { value: 0, label: "Match Score: <40%" },
];

export const candidates = [
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