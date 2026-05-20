import React from "react";
import { formatDateForDisplay } from "@/utils/DateFormatter";

const ExperienceSection = ({ header, items }) => {
  return (
    <>
      <p className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">{header}</p>
      {items.length > 0 ? (
        <div>
          {items.map((item, index) => (
            <div key={index} className="flex gap-3 md:mb-6 mb-3">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full border-2 border-teal-400 bg-white mt-1 shrink-0" />
                <div className="w-0.5 bg-[#0D3796] flex-1 mt-1" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">
                  {formatDateForDisplay(item.startDate)} -{" "}
                  {formatDateForDisplay(item.endDate)}
                </p>
                <p className="text-sm md:text-base font-semibold text-gray-900   ">
                  {header == "Work Experience"
                    ? `${item.jobTitle} in ${item.companyName}`
                    : `${item.degree} in ${item.fieldOfStudy}`}
                </p>
                <p className="text-xs md:text-sm text-gray-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Add Your {header.toLowerCase()}</p>
      )}
    </>
  );
};

export default ExperienceSection;
