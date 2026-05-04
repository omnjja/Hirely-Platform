import React from "react";

const ResponsabiltyItem = ({ text, subIcon }) => {
  return (
    <div className="flex gap-3">
      {subIcon}
      <p className="text-[16px] text-[#595C5E]">{text}</p>
    </div>
  );
};

export default ResponsabiltyItem;
