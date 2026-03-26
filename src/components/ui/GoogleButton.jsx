import React from "react";

const GoogleButton = ({ label, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full border border-gray-300 rounded-md py-2 flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-50 transition px-1 md:px-0"
    >
      <span className="text-sm font-medium">{label}</span>
      <img
        src="https://www.svgrepo.com/show/355037/google.svg"
        alt="Google"
        className="w-4 h-4"
      />
    </button>
  );
};

export default GoogleButton;
