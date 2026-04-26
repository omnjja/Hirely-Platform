import React from "react";
import MainHeader from "@/components/ui/MainHeader";
import Sidebar from "@/components/ui/SideBar";
import { CANDIDATEMENUITEMS } from "@/constants/candidateMenuItems";

const CandidateLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="mr-14 md:mr-20">
        <Sidebar menuItems={CANDIDATEMENUITEMS} />
      </div>

      <div className="flex-1 ">
        <MainHeader />
        <div className="ml-4 md:ml-7 mt-7 "> {children}</div>
      </div>
    </div>
  );
};

export default CandidateLayout;
