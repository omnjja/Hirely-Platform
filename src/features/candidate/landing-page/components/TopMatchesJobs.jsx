import React from "react";
import img from "@/assets/topMatch.webp";
import ParagraphInfo from "@/components/ui/ParagraphInfo";
import ButtonComponent from "@/components/ui/ButtonComponent";
import useTopMatches from "@/features/jobs/job-matches/hooks/useTopMatches";
import { formatText } from "@/utils/formatText";
import useAppNavigate from "@/hooks/useAppNavigate";
import TopMatchesJobsSkeleton from "./TopMatchesJobsSkeleton";

const TopMatchesJobs = () => {
  const { toViewJobDetails } = useAppNavigate();
  const { data, isLoading, error } = useTopMatches({ limit: 2 });
  const firstJob = data?.items[0]?.job || {};
  const secondJob = data?.items[1]?.job || {};

  console.log("topppp: ", data?.items);
  if (isLoading) return <TopMatchesJobsSkeleton />;
  if (error) return;
  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="font-bold text-xl md:text-2xl text-[#2C2F31]">
          Top Matched Jobs
        </p>
        <p className="text-[#595C5E] text-base">
          High-compatibility roles curated for you.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-7">
        {/* card1 */}
        <div className="w-full md:w-2/3 flex flex-col sm:flex-row justify-between p-6 border-3 border-[#EEF1F3] rounded-[48px]">
          <div className="flex flex-col items-start relative overflow-hidden w-full sm:w-1/2 h-65 sm:h-full mb-4 sm:mb-0">
            <ParagraphInfo color="#00432C">{`${Math.round(firstJob?.matchScore * 100)}% Match`}</ParagraphInfo>
            <img
              src={img}
              loading="lazy"
              alt="Top Match"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="w-full sm:ml-5 flex flex-col justify-between items-start">
            <div className="flex flex-col gap-5 items-start">
              <ParagraphInfo color="#0576D6">
                {`${formatText(firstJob?.workplaceType)} • ${formatText(firstJob?.jobType)}`}
              </ParagraphInfo>
              <div className="flex flex-col gap-3">
                <p className="text-[#2C2F31] text-2xl font-bold">
                  {firstJob?.title}
                </p>
                <p className="text-[#595C5E] text-base line-clamp-6">
                  {firstJob?.companySummary || "Company summary not available."}
                </p>
              </div>
            </div>
            <div className="w-full flex justify-between items-center mt-4 sm:mt-0">
              <div className="flex items-center gap-2">
                <p className="py-2 px-4 sm:py-1.5 sm:px-2.5 bg-[#E5E9EB] rounded-full text-base sm:text-xl font-bold text-[#0576D6] shrink-0">
                  {firstJob?.companyName[0]?.toUpperCase() || "?"}
                </p>
                <p className="text-[#2C2F31] text-sm capitalize">
                  {firstJob?.companyName}
                </p>
              </div>
              <div>
                <ButtonComponent
                  text="View Job"
                  aria-label="View Job"
                  style={{ bgColor: "#0576D6" }}
                  onClick={() => toViewJobDetails(`jobs/${firstJob?.id}`)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* card2 */}
        <div className="w-full md:w-1/3 flex flex-col justify-between p-6 bg-[#EEF1F3] border-3 border-[#EEF1F3] rounded-[48px]">
          <div className="flex flex-col gap-5 mb-5 lg:mb-2">
            <div className="flex justify-between">
              <p className="py-2 px-4 sm:py-3 sm:px-5 bg-[#E5E9EB] rounded-full text-base sm:text-xl font-bold text-[#0576D6] shrink-0">
                {secondJob?.companyName[0]?.toUpperCase() || "?"}
              </p>
              <div className="flex flex-col">
                <p className="font-bold text-[#10B982] text-xl">{`${Math.round(secondJob?.matchScore * 100)}%`}</p>
                <p className="font-bold uppercase text-[#747779] text-[10px]">
                  Score
                </p>
              </div>
            </div>

            <div>
              <p className="font-bold text-[#2C2F31] text-xl">
                {secondJob?.title}
              </p>
              <p className="text-base text-[#595C5E]">
                {secondJob?.companyName} • {secondJob?.location}
              </p>
            </div>
            <p className="text-sm text-[#595C5ECC] line-clamp-4">
              {secondJob?.companySummary || "Company summary not available."}
            </p>
          </div>

          <ButtonComponent
            text="View Details"
            arial-label="View Details"
            fullWidth
            onClick={() => toViewJobDetails(`jobs/${secondJob?.id}`)}
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
