import React from "react";

const LandingHeader = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-7">
        <span className="w-2 h-2 rounded-full bg-[#0576D6] animate-pulse" />
        <span className="text-xs font-semibold text-[#0C447C] tracking-wide">
          AI-powered recruitment
        </span>
      </div>
      <h1 className="md:text-3xl text-2xl font-extrabold leading-tight tracking-tight mb-3 text-gray-900">
        Hire smarter.
        <br />
        Get hired <span className="text-[#0576D6]">faster.</span>
      </h1>
      <p className="md:hidden text-sm text-gray-600 leading-relaxed mb-4 font-normal ">
        Hirely connects job seekers and HR teams with smart matching and fast
        application tracking.
      </p>
      <p className="hidden md:flex text-sm text-gray-600 leading-relaxed font-normal w-3/4">
        Hirely connects job seekers and HR teams through intelligent matching,
        real-time application tracking, interview prep, and role-based
        dashboards — making every step of the hiring journey faster and smarter.
      </p>
    </div>
  );
};

export default LandingHeader;
