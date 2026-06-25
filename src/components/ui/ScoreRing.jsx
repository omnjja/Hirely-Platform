import React from "react";

const ScoreRing = ({ value, color = "#0576D6" }) => {
  const r = 34;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;
  return (
    <svg width="90" height="90" viewBox="0 0 90 90">
      <circle
        cx="45"
        cy="45"
        r={r}
        fill="none"
        stroke="#EEF1F3"
        strokeWidth="8"
      />
      <circle
        cx="45"
        cy="45"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        transform="rotate(-90 45 45)"
        style={{ transition: "stroke-dashoffset 0.8s ease" }}
      />
      <text
        x="45"
        y="50"
        textAnchor="middle"
        fontSize="16"
        fontWeight="bold"
        fill="#111"
      >
        {value}%
      </text>
    </svg>
  );
};

export default ScoreRing;
