import React from "react";
import clsx from "clsx";

const Card = ({
  children,
  className = "",
  padding = "p-5",
  shadow = "shadow-sm",
  border = "border border-gray-600",
  rounded = "rounded-xl",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "w-full",
        padding,
        shadow,
        border,
        rounded,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
