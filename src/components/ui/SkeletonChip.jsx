import React from "react";

const SkeletonChip = ({ className = "" }) => {
  return <div className={`animate-pulse bg-slate-200 rounded ${className}`} />;
};

export default SkeletonChip;
