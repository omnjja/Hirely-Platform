import React from "react";

const Section = ({ title, children }) => {
  return (
    <div>
      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">
        {title}
      </h3>
      {children}
    </div>
  );
};

export default Section;
