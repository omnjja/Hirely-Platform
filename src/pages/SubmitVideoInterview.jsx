import React from "react";
import toast from "react-hot-toast";
import { CircleCheckBig } from "lucide-react";
import ButtonComponent from "@/components/ui/ButtonComponent";
import useSubmitInterview from "@/features/video-interview/hooks/useSubmitInterview";
import { useParams } from "react-router-dom";
import CompletedInterview from "@/features/video-interview/components/CompletedInterview";

const SubmitVideoInterview = () => {
  const { interviewId } = useParams();

  const {
    mutateAsync: submit,
    isPending,
    isSuccess,
    isError,
  } = useSubmitInterview();

  async function submitInterview() {
    try {
      await submit(interviewId);
      toast.success("Interview submitted successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    }
  }

  if (isSuccess) return <CompletedInterview />;

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-3xl border border-gray-200 bg-white p-12 shadow-md text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <CircleCheckBig className="h-10 w-10 text-green-600" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          Interview Completed
        </h1>

        <p className="mt-4 text-gray-600 leading-7">
          You have answered all interview questions.
          <br />
          Click the button below to submit your interview for review.
        </p>

        {isPending && (
          <p className="mt-6 text-sm text-primary font-medium">
            Finalizing your interview...
          </p>
        )}

        {isError && (
          <p className="mt-6 text-sm text-red-500">
            Something went wrong. Please try again.
          </p>
        )}

        <div className="mt-10 flex justify-center">
          <ButtonComponent
            disabled={isPending}
            onClick={submitInterview}
            className="min-w-[220px]"
          >
            {isPending ? "Submitting..." : "Submit Interview"}
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default SubmitVideoInterview;
