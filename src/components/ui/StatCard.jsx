import React from "react";
import clsx from "clsx";

const StatCard = ({
  title,
  value,
  description,
  bg_color,
  value_color,
  title_color = "text-[#566166]",
  description_color = "text-[#F9F6FF]",
  border,
}) => {
  return (
    <div
      className={clsx(
        `p-4 rounded-[8px] shadow ${bg_color} ${border ? `${border} border-l-4` : ""}`,
      )}
    >
      <p className={`text-[10px] font-semibold ${title_color}`}>{title}</p>
      <p className={`text-xl md:text-2xl font-bold ${value_color}`}>{value}</p>
      {description && (
        <p
          className={`text-[9px] md:text-[10px]  font-medium ${description_color}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default StatCard;
