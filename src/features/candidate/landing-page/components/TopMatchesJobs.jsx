import React from "react";
import img from "@/assets/topMatch.webp";
import ParagraphInfo from "@/components/ui/ParagraphInfo";
import ButtonComponent from "@/components/ui/ButtonComponent";

const TopMatchesJobs = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="font-bold text-xl md:text-2xl text-[#2C2F31]">
          Recommended for You
        </p>
        <p className="text-[#595C5E] text-base">
          High-compatibility roles curated for you.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-7">
        {/* card1 */}
        <div className="w-full md:w-2/3 flex flex-col sm:flex-row justify-between p-6 border-3 border-[#EEF1F3] rounded-[48px]">
          <div className="flex flex-col items-start relative overflow-hidden w-full  sm:w-60 h-65 sm:h-75 mb-4 sm:mb-0">
            <ParagraphInfo color="#00432C">98% Match</ParagraphInfo>
            <img
              src={img}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="w-full sm:w-1/2 flex flex-col justify-between items-start">
            <div className="flex flex-col gap-5 items-start">
              <ParagraphInfo color="#0576D6">Remote • Full-time</ParagraphInfo>
              <div className="flex flex-col gap-3">
                <p className="text-[#2C2F31] text-2xl font-bold">
                  Lead Product Strategist
                </p>
                <p className="text-[#595C5E] text-base">
                  Drive the future of decentralized finance at Nexus Lab. Lead a
                  cross-functional team of 15+ designers and engineers...
                </p>
              </div>
            </div>
            <div className="w-full flex justify-between items-center mt-4 sm:mt-0">
              <div className="flex items-center gap-2">
                <p className="py-2 px-4 sm:py-1.5 sm:px-2.5 bg-[#E5E9EB] rounded-full text-base sm:text-xl font-bold text-[#0576D6] shrink-0">
                  D
                </p>
                <p className="text-[#2C2F31] text-sm">Nexus Lab</p>
              </div>
              <div>
                <ButtonComponent
                  text="Quick Apply"
                  style={{ bgColor: "#0576D6" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* card2 */}
        <div className="w-full md:w-1/3 flex flex-col justify-between p-6 bg-[#EEF1F3] border-3 border-[#EEF1F3] rounded-[48px]">
          <div className="flex flex-col gap-5 mb-5 lg:mb-0">
            <div className="flex justify-between">
              <p className="py-2 px-4 sm:py-3 sm:px-5 bg-[#E5E9EB] rounded-full text-base sm:text-xl font-bold text-[#0576D6] shrink-0">
                D
              </p>
              <div className="flex flex-col">
                <p className="font-bold text-[#10B982] text-xl">89%</p>
                <p className="font-bold uppercase text-[#747779] text-[10px]">
                  Score
                </p>
              </div>
            </div>

            <div>
              <p className="font-bold text-[#2C2F31] text-xl">AI Research</p>
              <p className="text-base text-[#595C5E]">
                Stellaris AI • San Francisco
              </p>
            </div>
            <p className="text-sm text-[#595C5ECC]">
              Shape the future of LLMs in a high-growth environment. Focus on
              multi-modal integration and latency optimization...
            </p>
          </div>

          <ButtonComponent
            text="View Details"
            fullWidth
            style={{
              textColor: "#2C2F31",
              bgColor: "transperent",
              borderColor: "#ABADAF4D",
              bold: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TopMatchesJobs;
