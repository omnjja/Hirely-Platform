import React from "react";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import ButtonComponent from "@/components/ui/ButtonComponent";
import MatchPercentage from "@/components/ui/MatchPercentage";
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
            Our AI has analyzed 1,200+ opportunities to find the career that
            resonates with your core skills.
          </p>
          <p className="text-[25px] block lg:hidden font-bold text-[#1FA5A8]">
            95% Match Score
          </p>
        </div>

        <ButtonComponent
          style={{
            bgColor: "#FFFFFF",
            textColor: "#0576D6",
            bold: true,
          }}
          className="shrink-0"
        >
          <span>
            Explore Insights
            <AutoAwesomeOutlinedIcon fontSize="medium" />
          </span>
        </ButtonComponent>
      </div>

      <div className="relative z-5 hidden lg:flex items-end justify-center mt-6 md:mt-0">
        <MatchPercentage
          ringVariant="solid"
          ringColor="#1FA5A8"
          rounded="5-xl"
        />
      </div>
    </Card>
  );
};

export default CandidateLandingHero;
