import React from "react";
import clsx from "clsx";

const StatCard = ({
  title,
  value,
  description,
  side_by_side = false,
  bg_color,
  value_color,
  title_color = "text-[#566166]",
  description_color = "text-[#F9F6FF]",
  border,
}) => {
  return (
    <div
      className={clsx(
        `p-6 rounded-[12px] shadow ${bg_color} ${border ? `${border} border-l-4` : ""}`,
      )}
    >
      <p
        className={`text-[16px] font-semibold ${title_color} uppercase tracking-wide`}
      >
        {title}
      </p>
      <p className={`text-[36px] font-bold ${value_color}`}>
        {value}
        {side_by_side && (
          <p
            className={`inline pl-2 text-[12px]  font-medium ${description_color} capitalize`}
          >
            {description}
          </p>
        )}
      </p>
      {description && !side_by_side && (
        <p
          className={`text-[12px]  font-medium ${description_color} capitalize `}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default StatCard;
