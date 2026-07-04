import React from "react";
import Card from "@/components/ui/Card";
import bgImg from "@/assets/strictLines.webp";

const CandidateLandingHero = () => {
  return (
    <Card
      className="relative flex flex-col md:flex-row justify-between bg-[#2C57B133] border border-black p-6 md:p-10 md:pb-6 overflow-hidden "
      rounded="rounded-[48px]"
    >
      <img
        src={bgImg}
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply pointer-events-none"
      />

      <div className="relative z-5 flex-1 flex flex-col items-start gap-3 md:gap-6">
        <p className="text-4xl md:text-6xl font-black">
          Your Perfect Match is Waiting.
        </p>
        <div className="flex flex-col">
          <p className="w-full md:w-4/6">
            Our AI has analyzed opportunities to find the career that resonates
            with your core skills.
          </p>
          <p className="text-[25px] block lg:hidden font-bold text-[#1FA5A8]">
            Find Your Perfect Match
          </p>
        </div>
      </div>
    </Card>
  );
};

export default CandidateLandingHero;
