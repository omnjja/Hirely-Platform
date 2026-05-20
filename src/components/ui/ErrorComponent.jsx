import { AlertCircle, RefreshCw } from "lucide-react";
import React from "react";

const ErrorComponent = ({error, action}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
      <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
        <AlertCircle size={22} className="text-red-500" />
      </div>
      <div>
        <p className="font-semibold text-gray-800">Something went wrong</p>
        <p className="text-sm text-gray-400 mt-1">{error.message}</p>
      </div>
      <button
        onClick={action}
        className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
      >
        <RefreshCw size={14} />
        Try again
      </button>
    </div>
  );
};

export default ErrorComponent;
