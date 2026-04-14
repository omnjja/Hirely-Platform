import React from "react";
import MainHeader from "@/components/ui/MainHeader";
import Sidebar from "@/components/ui/SideBar";
import { CANDIDATEMENUITEMS } from "@/constants/candidateMenuItems";

const CandidateLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="mr-20">
        <Sidebar menuItems={CANDIDATEMENUITEMS} />
      </div>

      <div className="">
        <MainHeader />
        <div className="ml-7 mt-7 w-5xl"> {children}</div>
      </div>
    </div>
  );
};

export default CandidateLayout;
