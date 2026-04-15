import React from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import { Trash2 } from "lucide-react";
import ButtonComponent from "@/components/ui/ButtonComponent";

const VideoQuestions = () => {
  return (
    <div className="rounded-xl shadow-lg p-4 sm:p-6 bg-linear-to-tr from-white via-white via-85% to-[#E8EFF3] transition-all duration-300">
      {/* header */}
      <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-2 sm:p-4">
        {/* left */}
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="bg-[#1B41AA] p-2 sm:p-3 rounded-xl">
            <VideocamIcon sx={{ color: "white" }} />
          </div>

          <div className="flex flex-col">
            <p className="font-bold text-[#2A3439] text-sm sm:text-base">
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
        {/* question item */}
        {[1, 2].map((q) => (
          <div
            key={q}
            className="flex flex-col gap-4 p-4 sm:p-5 rounded-xl border border-gray-100 shadow-sm
            transition-all duration-300 hover:shadow-md "
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 justify-between">
              {/* left content */}
              <div className="flex items-start gap-3 flex-1">
                <p className="flex items-center justify-center text-xs sm:text-sm w-8 h-8 bg-[#E8EFF3] rounded-xl text-gray-600">
                  {q}
                </p>

                <div className="flex flex-col gap-2 sm:gap-3">
                  <p className="font-semibold text-[#2A3439] text-sm sm:text-base leading-snug">
                    Tell us about your most challenging project and how you
                    navigated technical debt.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="text-gray-500 text-xs px-3 py-1 bg-[#E8EFF3] rounded-md">
                      2 Minutes Limit
                    </span>
                    <span className="text-gray-500 text-xs px-3 py-1 bg-[#E8EFF3] rounded-md">
                      2 Re-takes allowed
                    </span>
                  </div>
                </div>
              </div>

              {/* delete */}
              <button
                className="self-end sm:self-start p-2 rounded-lg transition-all duration-200 
                hover:bg-red-50 hover:scale-110 active:scale-95 cursor-pointer"
              >
                <Trash2
                  size={20}
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                />
              </button>
            </div>
          </div>
        ))}

        {/* add question placeholder */}
        <div
          className="flex items-start gap-3 p-4 sm:p-5 rounded-xl border-2 border-dashed border-gray-200
          transition-all duration-300 hover:bg-gray-50 cursor-pointer"
        >
          <p className="flex items-center justify-center text-xs sm:text-sm w-8 h-8 bg-[#E8EFF3] rounded-xl text-gray-600">
            3
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
