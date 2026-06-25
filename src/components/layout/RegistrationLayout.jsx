import React, { cloneElement, useState } from "react";
import Logo from "../ui/Logo";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useAppNavigate from "@/hooks/useAppNavigate";
import ProgressBar from "../ui/ProgressBar";

const RegistrationLayout = ({ image, header, children }) => {
  const { toRoleSelection } = useAppNavigate();
  const [progress, setProgress] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 w-full bg-white shadow-sm z-10">
        <div className="flex items-center justify-between px-4 md:px-6">
          <Logo />
          <button
            onClick={toRoleSelection}
            className="flex items-center gap-1 text-xs md:text-sm text-gray-500 hover:text-gray-800 transition"
          >
            <ArrowBackIcon sx={{ fontSize: { xs: 14, md: 16 } }} />
            <span className="hidden md:block cursor-pointer">Change Role</span>
            <span className="md:hidden">Back</span>
          </button>
        </div>
        <div className="w-full h-1 bg-gray-200">
          <ProgressBar progress={progress} />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-6 md:py-10 px-4 mt-16 md:mt-20">
        <div className="flex items-center justify-start gap-4">
          <div className="w-20 h-15 overflow-hidden">
            <img
              src={image}
              alt="Registration"
              className="w-full h-full bg-cover"
            />
          </div>
          <p className="text-lg md:text-2xl font-bold text-gray-800 text-center">
            {header}
          </p>
        </div>
        <div className="bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100 w-full md:w-[50%] mt-4 md:mt-6">
          {cloneElement(children, { onProgressChange: setProgress })}
        </div>
      </div>
    </div>
  );
};

export default RegistrationLayout;
