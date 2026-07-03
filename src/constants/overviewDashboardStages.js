export const recruitmentStages = (funnelData) => [
  {
    label: "APPLIED",
    count: funnelData?.applications || 0,
    pct: funnelData?.applications > 0 ? 100 : 0,
    filled: true,
    purple: true,
    textColor: "text-[#0576D6]",
  },
  {
    label: "SCREENED",
    count: funnelData?.screened || 0,
    pct: funnelData?.applications
      ? (funnelData?.screened / funnelData?.applications) * 100
      : 0,
    filled: false,
    textColor: "text-[#526074]",
  },
  {
    label: "INTERVIEWED",
    count: funnelData?.interviewed || 0,
    pct: funnelData?.applications
      ? (funnelData?.interviewed / funnelData?.applications) * 100
      : 0,
    filled: false,
    textColor: "text-[#526074]",
  },
  {
    label: "HIRED",
    count: funnelData?.hired || 0,
    pct: funnelData?.applications
      ? (funnelData?.hired / funnelData?.applications) * 100
      : 0,
    filled: true,
    blue: true,
    textColor: funnelData?.hired > 0 ? "text-white" : "text-[#526074]",
  },
];
