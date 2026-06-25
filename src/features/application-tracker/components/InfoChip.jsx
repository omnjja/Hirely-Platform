import React from "react";

const InfoChip = ({ icon: Icon, label }) => {
  return label ? (
    <span className="flex items-center gap-1.5 text-sm text-gray-500 font-medium">
      <Icon size={14} className="text-[#0576D6]" />
      {label}
    </span>
  ) : null;
};

export default InfoChip;
