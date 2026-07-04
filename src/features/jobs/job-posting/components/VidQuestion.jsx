import React from "react";
import { Trash2 } from "lucide-react";
const TIME_LIMIT = 1;
const VidQuestion = ({ questionNumber, question, onRemove }) => {
  return (
    <div
      className="flex flex-col gap-4 p-4 sm:p-5 rounded-xl border border-gray-100 shadow-sm
            transition-all duration-300 hover:shadow-md "
    >
      <div className="flex flex-row items-start gap-3 sm:gap-4 justify-between">
        <div className="flex items-start gap-3 flex-1">
          <p className="flex items-center justify-center text-[9px] sm:text-xs w-8 h-8 bg-[#E8EFF3] rounded-xl text-gray-600">
            {questionNumber}
          </p>
          <div className="flex flex-col gap-2 sm:gap-3">
            <p className="font-semibold text-[#2A3439] text-xs sm:text-base leading-snug">
              {question}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-gray-500 text-[9px] sm:text-xs px-3 py-1 bg-[#E8EFF3] rounded-md">
                {TIME_LIMIT} Minutes Limit
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="self-start p-2 rounded-lg transition-all duration-200 
                hover:bg-red-50 hover:scale-110 active:scale-95 cursor-pointer"
          onClick={onRemove}
        >
          <Trash2
            size={20}
            className="text-gray-400 hover:text-red-500 transition-colors duration-200"
          />
        </button>
      </div>
    </div>
  );
};

export default VidQuestion;
