import React, { useState } from "react";
import FeedbackCard from "./FeedbackCard";
import ButtonComponent from "@/components/ui/ButtonComponent";

const InterviewResponses = ({ data }) => {
  const numberOfResponses = data.length;
  const [showAllResponses, setShowAllResponses] = useState(false);
  const displayResponses = showAllResponses ? data : data.slice(0, 3);
  return (
    <div>
      <p className="text-[#0576D6] text-lg font-semibold">
        Interview Responses ({numberOfResponses})
      </p>
      <div className="m-4">
        {displayResponses.map((item, index) => (
          <FeedbackCard
            key={index}
            question={item.question}
            transcription={item.transcription}
            responseURL={item.responseURL}
          />
        ))}
      </div>
      {numberOfResponses > 3 && (
        <div className="flex justify-center mt-15 ">
          <ButtonComponent
            style={{ size: "md" }}
            className="font-medium"
            onClick={() => setShowAllResponses(!showAllResponses)}
          >
            {showAllResponses ? "Show Less" : "View Remaining Responses"}
          </ButtonComponent>
        </div>
      )}
    </div>
  );
};

export default InterviewResponses;
