import clsx from "clsx";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";

const GRID_COLS = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
};

const MOBILE_GRID_COLS = {
  1: "grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
};

const OptionsCard = ({
  name,
  label,
  options = [],
  columns = 2,
  mobileColumns,
  labelClassName = "",
  error,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={options[0]?.value}
      render={({ field }) => (
        <>
          {label && (
            <p className={clsx("text-sm font-medium mb-2", labelClassName)}>
              {label}
            </p>
          )}
          <div
            className={clsx(
              "grid gap-2",
              GRID_COLS[columns] ?? "grid-cols-2",
              mobileColumns && MOBILE_GRID_COLS[mobileColumns],
            )}
          >
            {options.map((opt) => (
              <div
                key={opt.value}
                onClick={() => field.onChange(opt.value)}
                className={clsx(
                  "text-xs sm:text-sm cursor-pointer flex items-center justify-center",
                  "border rounded-lg p-1 transition select-none",
                  field.value === opt.value
                    ? "bg-[#1B41AA] text-white border-[#1B41AA] shadow-md"
                    : "bg-[#E5E7EB] text-black hover:bg-[#D1D5DB] border-gray-300",
                )}
              >
                {opt.label}
              </div>
            ))}
          </div>
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </>
      )}
    />
  );
};

export default OptionsCard;
