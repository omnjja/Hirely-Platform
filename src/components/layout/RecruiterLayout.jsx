import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./../ui/Sidebar";
import { BarChart3, Briefcase, Users, Menu } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const menuItems = [
  { icon: Briefcase, path: "/jobs", label: "Jobs" },
  { icon: Users, path: "/candidates", label: "Candidates" },
  { icon: BarChart3, path: "/analytics", label: "Analytics" },
];

const RecruiterLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const drawerOpen = isOpen && !isDesktop;
  return (
    <div className="w-full flex min-h-screen">
      {/* Sidebar Desktop */}
      <div className="hidden lg:block">
        <Sidebar menuItems={menuItems} />
      </div>

      {/* Sidebar Mobile  */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-40 shadow-xl">
            <Sidebar menuItems={menuItems} isMobile setIsOpen={setIsOpen} />
          </div>
          <div
            className="bg-black/40 w-full"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}

      <div className="flex-1 w-full">
        <div className="bg-white sticky top-0 left-0 z-10 flex items-center sm:gap-5 lg:justify-between p-4">
          {/* menu mobile */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
            onClick={() => setIsOpen(true)}
          >
            <Menu />
          </button>

          <h1 className=" text-lg sm:text-xl font-bold gradient-text text-transparent bg-clip-text bg-linear-to-r from-[#1B41AA] to-[#10B981]">
            Hirely: Get Hired Faster!
          </h1>
        </div>

        <div className="px-3 sm:px-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RecruiterLayout;
