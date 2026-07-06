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
        `p-4 sm:p-5 lg:p-6 rounded-[12px] shadow ${bg_color} ${
          border ? `${border} border-l-4` : ""
        }`,
      )}
    >
      <p
        className={clsx(
          "text-xs sm:text-sm lg:text-base font-semibold uppercase tracking-wide",
          title_color,
        )}
      >
        {title}
      </p>

      <div className="flex flex-wrap items-end gap-1 sm:gap-2">
        <span
          className={clsx(
            "text-2xl sm:text-3xl lg:text-[36px] font-bold leading-none",
            value_color,
          )}
        >
          {value}
        </span>

        {side_by_side && description && (
          <span
            className={clsx(
              "text-[10px] sm:text-xs font-medium capitalize pb-1",
              description_color,
            )}
          >
            {description}
          </span>
        )}
      </div>

      {description && !side_by_side && (
        <p
          className={clsx(
            "mt-1 text-[10px] sm:text-xs font-medium capitalize",
            description_color,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default StatCard;
