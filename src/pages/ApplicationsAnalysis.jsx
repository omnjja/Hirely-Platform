import CandidateSummary from "@/features/dashboard-analytics/components/CandidateSummary";
import CandidateTable from "@/features/dashboard-analytics/components/CandidateTable";
import DashboardStats from "@/features/dashboard-analytics/components/DashboardStats";
import Toolbar from "@/features/dashboard-analytics/components/Toolbar";
import React from "react";

const ApplicationsAnalysis = () => {
  return (
    <div className="flex flex-col gap-8 p-8">
      <DashboardStats />
      <Toolbar />
      <CandidateTable />
      <CandidateSummary />
    </div>
  );
};

export default ApplicationsAnalysis;
