import React from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import ButtonComponent from "@/components/ui/ButtonComponent";
import IconWrapper from "@/components/ui/IconWrapper";
import VidQuestion from "./VidQuestion";

const questions = [
  {
    id: 1,
    text: "Tell us about your most challenging project and how you navigated technical debt.",
    timeLimit: "2 Minutes Limit",
    retakes: "2 Re-takes allowed",
  },
  {
    id: 2,
    text: "Describe a situation where you had to learn a new technology quickly. How did you approach it?",
    timeLimit: "3 Minutes Limit",
    retakes: "3 Re-takes allowed",
  },
];

const VideoQuestions = () => {
  return (
    <div className="rounded-xl shadow-lg p-4 sm:p-6 bg-linear-to-tr from-white via-white via-85% to-[#E8EFF3] transition-all duration-300">
      {/* header */}
      <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-2 sm:p-4">
        {/* left */}
        <div className="flex items-start gap-3 sm:gap-4">
          <IconWrapper>
            <VideocamIcon sx={{ color: "white" }} />
          </IconWrapper>

          <div className="flex flex-col">
            <p className="font-bold text-[#2A3439] text-sm sm:text-[30px]">
              Automated Video Screening
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Candidates will record responses to these specific questions.
            </p>
          </div>
        </div>

        {/* button */}
        <ButtonComponent
          text="+ Add Question"
          textColor="#1B41AA"
          bgColor="white"
          shadow="md"
          rounded="lg"
          bold
          size="md"
        />
      </div>

      {/* questions */}
      <div className="flex flex-col gap-4 sm:gap-6 mt-4">
        {questions.map((question) => (
          <VidQuestion key={question.id} question={question} />
        ))}

        {/* add question placeholder */}
        <div
          className="flex items-center gap-3 p-4 sm:p-5 rounded-xl border-2 border-dashed border-gray-200
          transition-all duration-300 hover:bg-gray-50 cursor-pointer"
        >
          <p className="flex items-center justify-center text-[9px] sm:text-xs w-8 h-8 bg-[#E8EFF3] rounded-xl text-gray-600">
            {questions.length + 1}
          </p>

          <p className="text-sm sm:text-base text-[#2A3439]">
            Click 'Add Question' to define another prompt...
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoQuestions;
