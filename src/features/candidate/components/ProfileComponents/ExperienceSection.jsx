import React from "react";

const ExperienceSection = ({ header, items }) => {
  return (
    <div>
      <p className="text-3xl font-semibold mb-4">{header}</p>
      {items ? (
        items.map((item, index) => (
          <div key={index} className="flex gap-3 mb-6">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full border-2 border-teal-400 bg-white mt-1 flex-shrink-0" />
              <div className="w-0.5 bg-[#0D3796] flex-1 mt-1" />
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">{item.date}</p>
              <p className="text-base font-semibold text-gray-900   ">
                {item.title}
              </p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No {header.toLowerCase()} to display.</p>
      )}
    </div>
  );
};

export default ExperienceSection;
