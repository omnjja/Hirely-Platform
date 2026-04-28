import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/ui/Sidebar";
import MainHeader from "@/components/ui/MainHeader";
import { Menu } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { CANDIDATEMENUITEMS } from "@/constants/candidateMenuItems";

const CandidateLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const drawerOpen = isOpen && !isDesktop;

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar Desktop */}
      <div className="hidden lg:block h-full">
        <Sidebar menuItems={CANDIDATEMENUITEMS} />
      </div>

      {/* Sidebar Mobile Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-40 shadow-xl h-full">
            <Sidebar
              menuItems={CANDIDATEMENUITEMS}
              isMobile
              setIsOpen={setIsOpen}
            />
          </div>
          <div
            className="bg-black/40 flex-1"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Header */}
        <div className="bg-white flex items-center sm:gap-5 lg:justify-between p-4 border-b border-gray-100 shadow-sm">
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          <MainHeader />
        </div>

        {/* Page Content */}
        <div className="px-3 sm:px-6 py-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CandidateLayout;
