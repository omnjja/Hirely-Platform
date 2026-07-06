import React from "react";
import useAppNavigate from "@/hooks/useAppNavigate";

const LandingButtons = () => {
  const { toLogin, toSignup } = useAppNavigate();

  return (
    <div className="flex md:w-1/2 w-full gap-3 ">
      <button
        onClick={() => toSignup()}
        className="flex-1 h-11 rounded-full bg-[#0576D6] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:bg-[#0461b8] active:scale-[0.97]"
        style={{ boxShadow: "0 4px 18px rgba(5,118,214,0.25)" }}
      >
        <svg
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M8 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-5 9a5 5 0 0 1 10 0" />
          <path d="M12 11v4m-2-2h4" />
        </svg>
        Sign up
      </button>
      <button
        onClick={() => toLogin()}
        className="flex-1 h-12 rounded-full border border-gray-200 bg-white text-gray-800
                     text-sm font-medium flex items-center justify-center gap-2
                     hover:bg-gray-50 hover:border-gray-300 active:scale-[0.97] transition-all duration-150"
      >
        <svg
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M10 2h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3" />
          <path d="M7 11l3-3-3-3M10 8H2" />
        </svg>
        Log in
      </button>
    </div>
  );
};

export default LandingButtons;
