import React from "react";
import clsx from "clsx";

const MatchPercentage = ({
  percentage = 92,
  label = "Match Score",
  title = "UX Designer",
  subtitle = "Google • Remote",
  className,
  rounded = "lg",
  circleClassName,
  gradientFrom = "#1B41AA",
  gradientTo = "#10B981",
  ringVariant = "gradient", // "gradient" || "solid"
  ringColor = "#1B41AA",
}) => {
  const cardStyle =
    rounded === "5-xl"
      ? {
          borderRadius: "48px",
        }
      : {
          borderRadius: "4px",
        };
  const ringStyle =
    ringVariant === "gradient"
      ? {
          background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
        }
      : {
          background: ringColor,
        };

  const textStyle =
    ringVariant === "gradient"
      ? {
          backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
        }
      : {
          color: ringColor,
        };

  return (
    <div
      className={clsx(
        "sm:w-55 md:w-60 flex flex-col items-center gap-3 bg-white shadow-lg rounded-lg border p-4 sm:p-6",
        className,
      )}
      style={cardStyle}
    >
      <div
        className={clsx(
          "w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full p-3 shrink-0",
          circleClassName,
        )}
        style={ringStyle}
      >
        <div className="flex flex-col justify-center items-center w-full h-full bg-white rounded-full">
          <span
            className="text-[36px] sm:text-[42px] md:text-[48px] font-bold tracking-wide text-transparent bg-clip-text leading-10"
            style={textStyle}
          >
            {percentage}%
          </span>
          <span className="text-[#595C5E] text-[10px] sm:text-[11px] md:text-[12px] uppercase font-bold">
            {label}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center text-center">
        {title && (
          <p className="text-[#2E2E2E] text-[15px] sm:text-[16px] md:text-[18px] font-bold">
            {title}
          </p>
        )}

        {subtitle && (
          <p className="text-[#595C5E] text-[12px] sm:text-[13px] md:text-[14px]">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default MatchPercentage;
