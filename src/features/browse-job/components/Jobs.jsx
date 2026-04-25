import React from "react";
import Job from "./Job";
import MatchPercentage from "@/components/ui/MatchPercentage";

const Jobs = () => {
  return (
    <div className="flex flex-col gap-5">
      <Job />
      <Job />
      <Job />
    </div>
  );
};

export default Jobs;
