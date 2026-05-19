import React, { useState } from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import ButtonComponent from "@/components/ui/ButtonComponent";
import IconWrapper from "@/components/ui/IconWrapper";
import VidQuestion from "./VidQuestion";
import AddNewQuestion from "./AddNewQuestion";
import { useFormContext, useWatch } from "react-hook-form";

const VideoQuestions = () => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();
  const questions = useWatch({ control, name: "interviewerQuestions" }) ?? [];
  const [addQuestion, setAddQuestion] = useState(false);

  function onAddQuestion() {
    setAddQuestion(true);
  }
  function onCancelQuestion() {
    setAddQuestion(false);
  }
  function onRemoveQuestion(index) {
    const updated = questions.filter((_, i) => i !== index);
    setValue("interviewerQuestions", updated);
  }
  return (
    <div className="rounded-xl shadow-lg p-4 sm:p-6 bg-linear-to-tr from-white via-white via-65% to-[#E8EFF3] transition-all duration-300">
      <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-2 sm:p-4">
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

        <ButtonComponent
          text="+ Add Question"
          style={{
            bgColor: "#ffffff",
            textColor: "#1B41AA",
            bold: true,
          }}
          onClick={() => onAddQuestion()}
        />
      </div>

      <div className="flex flex-col gap-4 sm:gap-6 mt-4">
        {questions.length > 0 ? (
          <div className="flex flex-col gap-4 sm:gap-6 mt-4">
            {questions.map((question, index) => (
              <VidQuestion
                key={index}
                questionNumber={index + 1}
                question={question}
                onRemove={() => onRemoveQuestion(index)}
              />
            ))}
          </div>
        ) : (
          !addQuestion && (
            <div
              className="flex items-center gap-3 p-4 sm:py-3 sm:px-5 rounded-xl border-2 border-dashed border-gray-200"
            >
              <p className="mx-auto text-gray-500 text-xs sm:text-base ">
                Click 'Add Question' to define a question prompt...
              </p>
            </div>
          )
        )}
        {addQuestion && (
          <AddNewQuestion
            quationsNum={questions.length}
            onCancelQuestion={onCancelQuestion}
          />
        )}
        <div className="">
          <p className="text-red-500 text-sm px-4">
            {errors.interviewerQuestions?.message || " "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoQuestions;
