import React from "react";
import ButtonComponent from "@/components/ui/ButtonComponent";
import imgBoy from "@/assets/boy.webp";

const JobRecruiter = ({ name, hrJobTitle, size, quote }) => {
  return (
    <div className="relative overflow-hidden rounded-4xl border border-black bg-[#1A48A133] p-4 flex flex-col ">
      <div className="p-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* <div className="flex items-center justify-center bg-black text-white font-bold shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-gray-200">
            SWE
          </div> */}
          <div className="hidden sm:block shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-gray-200">
            <img src={imgBoy} className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col">
            <p className="font-bold text-[#2C2F31] text-sm sm:text-lg">
              {name}
            </p>
            <p className="text-xs sm:text-sm text-[#595C5E]">{/* {} */}</p>
            <div className="mt-3 flex gap-2 flex-wrap">
              <span className="text-xs font-semibold bg-[#2C57B11A] text-[#1FA5A8] px-2.5 py-1 rounded-full">
                {hrJobTitle}
              </span>
              <span className="text-xs font-semibold bg-[#2C57B11A] text-[#1FA5A8] px-2.5 py-1 rounded-full">
                {size} Employees
              </span>
            </div>
          </div>
        </div>
        <ButtonComponent
          text="Follow"
          style={{
            bgColor: "#FFFFFF",
            textColor: "#1FA5A8",
            rounded: "4xl",
            size: "sm",
            bold: true,
          }}
          className="shrink-0 shadow-sm z-5"
        />
      </div>

      <div className=" px-4 py-3">
        <p className="text-xs sm:text-sm text-[#595C5E] italic">"{quote}"</p>
      </div>
      <div className="absolute top-0 right-0">
        <svg
          width="64"
          height="80"
          viewBox="0 0 64 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2.5"
            y="-45.5"
            width="123"
            height="123"
            rx="61.5"
            fill="#1FA5A8"
            stroke="black"
            stroke-width="5"
          />
        </svg>
      </div>
    </div>
  );
};

export default JobRecruiter;
