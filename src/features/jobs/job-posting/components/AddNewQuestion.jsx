import ButtonComponent from "@/components/ui/ButtonComponent";
import { useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";

const AddNewQuestion = ({ quationsNum, onCancelQuestion }) => {
  const [text, setText] = useState("");

  const { control, setValue } = useFormContext();
  const questions = useWatch({ control, name: "interviewerQuestions" }) ?? [];

  function handleAdd() {
    if (!text.trim()) return;
    setValue("interviewerQuestions", [...questions, text]);
    onCancelQuestion();
  }

  return (
    <div
      className="flex items-center gap-3 p-4 sm:py-3 sm:px-5 rounded-xl border-2 border-dashed border-gray-200
          transition-all duration-300 hover:bg-gray-50"
    >
      <p className="flex items-center justify-center text-[9px] sm:text-xs w-8 h-8 bg-[#E8EFF3] rounded-xl text-gray-600">
        {quationsNum + 1}
      </p>
      <div className="flex-1">
        <input
          placeholder="e.g., How do you approach API versioning with mobile clients?"
          className="w-full p-2 rounded-lg text-sm sm:text-base text-[#2A3439]"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleAdd();
            }
          }}
        />
      </div>
      <div className="flex flex-col justify-end gap-1">
        <ButtonComponent
          type="button"
          text="Add"
          className="bg-[#1B41AA]"
          style={{ size: "xs" }}
          onClick={() => handleAdd()}
          aria-label="Add Video Question"
        />
        <ButtonComponent
          type="button"
          text="Cancel"
          style={{
            bgColor: "#E5E7EB",
            textColor: "black",
            rounded: "xl",
            size: "xs",
            hover: {
              bgColor: "#D1D5DB",
            },
          }}
          onClick={() => onCancelQuestion()}
          aria-label="Cancel Adding Video Question"
        />
      </div>
    </div>
  );
};

export default AddNewQuestion;
