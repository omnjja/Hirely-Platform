import ButtonComponent from "@/components/ui/ButtonComponent";
import { ArrowRight, CircleCheckBig } from "lucide-react";

const InterviewInstructions = ({ title, instructions, onStart }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-semibold text-gray-900">{title}</h2>

      <ul className="space-y-4">
        {instructions?.map((instruction, index) => (
          <li key={index} className="flex items-start gap-3">
            <CircleCheckBig
              size={20}
              className="mt-0.5 shrink-0 text-primary"
            />

            <span className="text-sm leading-6 text-gray-600">
              {instruction}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <ButtonComponent onClick={onStart} className="w-full md:w-auto">
          <div className="flex gap-2 items-center justify-center">
            <p>Start Interview</p>

            <ArrowRight size={20}/>
          </div>
        </ButtonComponent>
      </div>
    </div>
  );
};

export default InterviewInstructions;
