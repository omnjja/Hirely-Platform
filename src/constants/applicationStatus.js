export const APPLICATION_STATUSES_FILTERS = {
  ALL: "All Statuses",
  APPLIED: "Applied",
  IN_REVIEW: "In Review",
  INTERVIEW: "Interview",
  ACCEPTED: "Accepted",
};

export const APPLICATION_STATUSES = {
  PENDING: "Pending",
  APPLIED: "Applied",
  IN_REVIEW: "In Review",
  SHORTLISTED: "Shortlisted",
  CV_FAILED: "CV Failed",
  INTERVIEW: "Interview",
  ACCEPTED: "Accepted",
  REJECTED: "Rejected",
};

export const STATUS_CONFIG = {
  INTERVIEW: {
    label: "Interview",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-600",
    barColor: "bg-[#0576D6]",
    borderTop: "bg-[#0576D6]",
    detailBg: "bg-blue-50",
    detailText: "text-blue-600",
  },
  ACCEPTED: {
    label: "Accepted",
    badgeBg: "bg-green-100",
    badgeText: "text-[#00583C]",
    barColor: "bg-[#0576D6]",
    borderTop: "bg-[#9DFFD5]",
    detailBg: "bg-green-50",
    detailText: "text-green-600",
  },
  APPLIED: {
    label: "Applied",
    badgeBg: "bg-gray-100",
    badgeText: "text-gray-600",
    barColor: "bg-gray-300",
    borderTop: "bg-gray-300",
    detailBg: "bg-gray-50",
    detailText: "text-gray-600",
  },
  IN_REVIEW: {
    label: "In Review",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-500",
    barColor: "bg-[#0576D6]",
    borderTop: "bg-[#0576D6]",
    detailBg: "bg-blue-50",
    detailText: "text-blue-600",
  },
  REJECTED: {
    label: "Rejected",
    badgeBg: "bg-red-100",
    badgeText: "text-red-400",
    barColor: "bg-red-300",
    borderTop: "bg-black",
    detailBg: "bg-red-50",
    detailText: "text-red-500",
  },
  PENDING: {
    label: "Pending",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-700",
    barColor: "bg-amber-400",
    borderTop: "bg-amber-400",
    detailBg: "bg-amber-50",
    detailText: "text-amber-700",
  },

  CV_FAILED: {
    label: "CV Failed",
    badgeBg: "bg-red-100",
    badgeText: "text-red-700",
    barColor: "bg-red-400",
    borderTop: "bg-red-400",
    detailBg: "bg-red-50",
    detailText: "text-red-700",
  },
};

export const formatApplicationCard = (item) => ({
  company: item.job?.companyName || "Unknown Company",
  role: item.job?.title || "Unknown Role",
  status: item.application?.status,
  stageLabel: "Current Stage",
  stageValue: `Stage ${item.application?.currentStage || 1} of ${item.application?.totalStages || 5}`,
  currentStage: item.application?.currentStage || 1,
  totalStages: item.application?.totalStages || 5,
  nextStepText: item.application?.nextStepTitle,
  actionVariant: item.application?.status === "ACCEPTED" ? "solid" : "ghost",
  actionLabel:
    item.application?.status === "ACCEPTED"
      ? "Review Offer"
      : item.application?.status === "REJECTED"
        ? "Feedback Details"
        : "View Details",
});
