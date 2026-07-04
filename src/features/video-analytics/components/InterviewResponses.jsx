import React, { useState } from "react";
import FeedbackCard from "./FeedbackCard";
import ButtonComponent from "@/components/ui/ButtonComponent";

const feedbackData = [
  {
    question: "Q1: Tell us about your most complex design challenge.",
    feedback:
      "Detailed use of the STAR method. Excellent articulation of the friction points between engineering and design. Suggested slight more focus on the specific metric outcomes.",
  },
  {
    question: "Q2: How do you prioritize features in a tight deadline?",
    feedback:
      "Solid understanding of the RICE framework. Alex demonstrated strong leadership qualities. Recommendation: Mention cross-functional stakeholder buy-in more explicitly.",
  },
  {
    question: "Q3: Describe your experience with Design Systems.",
    feedback:
      "Expert-level knowledge. Clearly explained tokenization and governance models. Tone was confident and authoritative without being pedantic.",
  },
  {
    question: "Q4: How do you handle design critiques?",
    feedback:
      "Alex provided a balanced perspective on receiving and giving feedback. Could have included more examples of handling conflicting opinions.",
  },
  {
    question: "Q5: Can you walk us through a recent project?",
    feedback:
      "Excellent storytelling. Alex effectively highlighted the problem, solution, and impact. Recommendation: Include more quantitative metrics to demonstrate success.",
  },
];

const InterviewResponses = () => {
  const numberOfResponses = feedbackData.length;
  const [showAllResponses, setShowAllResponses] = useState(false);
  const displayResponses = showAllResponses
    ? feedbackData
    : feedbackData.slice(0, 3);
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
            feedback={item.feedback}
          />
        ))}
      </div>
      {feedbackData.length > 3 && (
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
