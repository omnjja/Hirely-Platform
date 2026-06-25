import ButtonComponent from "@/components/ui/ButtonComponent";
import { Download } from "lucide-react";
import React from "react";

const HeaderCard = () => {
  return (
    <div className="flex items-end justify-between">
      <div className="flex flex-col gap-1">
        <p className="text-xs md:text-sm font-medium text-[#454652] uppercase">
          Video Interview Analysis
        </p>
        <p className="text-lg md:text-2xl font-bold text-black ">
          Senior Product Designer at Meta
        </p>
        <p className="text-xs md:text-sm text-[#454652]">
          Interviewed on October 24, 2023 • 24m 12s duration
        </p>
      </div>
      <ButtonComponent
        bg_color="bg-[#0576D6]"
        value_color="text-white"
        className="px-2 py-1 text-xs md:px-5 md:py-2 md:text-sm"
      >
        {<Download className="inline w-3 h-3 md:w-4 md:h-4 mr-1" />}
        Download Full Report
      </ButtonComponent>
    </div>
  );
};

export default HeaderCard;
