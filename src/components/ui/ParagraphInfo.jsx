import clsx from "clsx";
import React from "react";

const ParagraphInfo = ({
  children,
  className,
  bg = "#E5E9EB",
  color = "#2E2E2E",
}) => {
  return (
    <p
      className={clsx("min-w-fit text-xs font-bold px-2 py-1 rounded-2xl", className)}
      style={{
        backgroundColor: bg,
        color: color,
      }}
    >
      {children}
    </p>
  );
};

export default ParagraphInfo;
