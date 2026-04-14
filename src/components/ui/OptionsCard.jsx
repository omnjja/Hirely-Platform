import React from "react";

const OptionsCard = ({
  label,
  options = [],
  value = options[0]?.value,
  onChange,
  columns = 2,
}) => {
  return (
    <>
      {label && <p className="text-sm font-medium mb-2 ">{label}</p>}
      <div
        className={`grid gap-2`}
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        }}
      >
        {options.map((opt) => (
          <div
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`text-sm cursor-pointer flex items-center justify-center border rounded-lg p-1 transition select-none
          ${
            value === opt.value
              ? "bg-[#1B41AA] text-white border-[#1B41AA] shadow-md"
              : "bg-[#E5E7EB] text-black hover:bg-[#D1D5DB] border-gray-300"
          }`}
          >
            {opt.label}
          </div>
        ))}
      </div>
    </>
  );
};

export default OptionsCard;
