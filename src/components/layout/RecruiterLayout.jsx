import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./../ui/Sidebar";
import { BarChart3, Briefcase, Users } from "lucide-react";

const menuItems = [
  { icon: Briefcase, path: "/jobs", label: "Jobs" },
  { icon: Users, path: "/candidates", label: "Candidates" },
  { icon: BarChart3, path: "/analytics", label: "Analytics" },
];

const RecruiterLayout = () => {
  return (
    <div className="w-full flex min-h-screen">
      <div>
        <Sidebar menuItems={menuItems} />
      </div>
      <div className="w-full">
        <div className="flex-1 flex items-start justify-start p-4">
          <h1 className="text-2xl font-bold gradient-text text-transparent bg-clip-text bg-linear-to-r from-[#1B41AA] to-[#10B981]">
            Hirely: Get Hired Faster!
          </h1>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RecruiterLayout;
