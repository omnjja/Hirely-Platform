import React from "react";
import submit from "@/assets/vidSubmit.png";

const CompletedInterview = () => {
  return (
    <div className="mx-auto min-h-screen flex flex-col items-center gap-5 px-4 w-full">
      <div className="w-130 h-70">
        <img
          src={submit}
          alt="Submit Video Interview"
          className="mx-auto mb-6"
        />
      </div>

      <div className="bg-[#00A39808] rounded-2xl shadow-sm border border-gray-100 p-10 text-center ">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          Submission Confirmation
        </h2>
        <p>Thank you for completing </p>
        <p className="text-gray-500 text-lg mt-2">
          Your application has been submitted successfully
        </p>
      </div>
    </div>
  );
};

export default CompletedInterview;
