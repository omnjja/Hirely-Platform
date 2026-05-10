import React from "react";
import Card from "@/components/ui/Card";
import { ExternalLink } from "lucide-react";
import ParagraphInfo from "@/components/ui/ParagraphInfo";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useRecomendedJobs } from "../hooks/useRecomendedJobs";
import RecomendedSkeleton from "./RecomendedSkeleton";
import useAppNavigate from "@/hooks/useAppNavigate";
import { formatPastDate } from "@/utils/formatPastDate";
import { formatText } from "@/utils/formatText";

const RecomendedForYou = () => {
  const { toViewJobDetails } = useAppNavigate();

  const { data, error, isLoading } = useRecomendedJobs();

  if (error) return;
  if (isLoading) return <RecomendedSkeleton />;
  if (!data || data.length === 0) return;

  return (
    <div className="flex flex-col items-start gap-4">
      <p className="font-bold text-xl md:text-2xl text-[#2C2F31]">
        Recommended for You
      </p>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex gap-3 w-max pb-4 snap-x snap-mandatory">
          {data?.map((job, indx) => (
            <Card
              key={indx}
              className="flex flex-col gap-2 sm:gap-3 items-start snap-start max-w-fit shrink-0 whitespace-normal cursor-pointer transition hover:scale-99 duration-500"
              rounded="rounded-4xl"
              onClick={() => toViewJobDetails(job?.id)}
            >
              <div className="flex gap-1 items-center">
                <div className="cursor-pointer bg-[#B9CFFF] px-2 py-1 rounded-2xl">
                  <ExternalLink size={16} color="#6A7282" />
                </div>
                <ParagraphInfo color="#595C5E" bg="#E5E9EB">
                  {formatPastDate(job?.createdAt)}
                </ParagraphInfo>
              </div>
              <div className="w-full">
                <p className="truncate text-[#2C2F31] text-base md:text-lg font-bold">
                  {job?.title}
                </p>
                <p className="truncate text-[#595C5E] text-xs md:text-sm">
                  {`${job?.companyName} • ${job?.location}`}
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <ParagraphInfo color="#595C5E" bg="#E5E9EB">
                  {formatText(job?.jobType)}
                </ParagraphInfo>
                <ParagraphInfo color="#1BA2A5" bg="#65F3B733">
                  {job?.score}
                </ParagraphInfo>
              </div>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="h-1.5 mt-1" />
      </ScrollArea>
    </div>
  );
};

export default RecomendedForYou;
