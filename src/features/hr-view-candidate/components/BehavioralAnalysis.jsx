import React from "react";

const analysis = [
  { label: "Confidence", value: 94 },
  { label: "Communication", value: 88 },
  { label: "English Prof.", value: 100, text: "Native" },
  { label: "Body Language", value: 90, text: "Positive" },
];

const BehavioralAnalysis = () => {
  return (
    <div className="border border-[#0A0A0A] rounded-xl bg-[#0576D6]  p-3 text-white flex flex-col">
      <div className="flex-3 text-center">video</div>
      <div className="flex-1 ">
        <p className="text-sm font-semibold">Behavioral Analysis</p>
        <div className="mt-3 grid grid-cols-2 gap-x-4">
          {analysis.map(({ label, value, text }) => (
            <div key={label} className="mb-4">
              <div className="flex justify-between gap-1 mb-1">
                <p className="text-xs font-semibold">{label}</p>
                <p className="text-xs font-semibold">{text ?? `${value}%`}</p>
              </div>

              <div className="h-2 rounded bg-[#F0F4F7]">
                <div
                  className="h-full rounded bg-[#1FA4A7]"
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BehavioralAnalysis;
