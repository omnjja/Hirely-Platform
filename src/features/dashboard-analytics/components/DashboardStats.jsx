import StatCard from "@/components/ui/StatCard";
import React from "react";

const DashboardStats = ({ data }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <StatCard
        title="Total Applicants"
        value={data?.totalApplications || "0"}
        description={`+${data?.totalApplications_analysis || "0"}% vs last month`}
        bg_color="bg-[#fff]"
        value_color="text-[#0576D6]"
        description_color="text-[#0576D6]"
      />
      <StatCard
        title="Interview Rate"
        value={`${(data?.interviewRate || 0).toFixed(1)}%`}
        description={`Standard baseline: ${data?.interviewRate_baseline || "0"}%`}
        bg_color="bg-[#fff]"
        value_color="text-[#2A3439]"
        description_color="text-[#566166]"
      />
      <StatCard
        title="Time to Hire"
        value={`${data?.tthire || "0"}d`}
        description={`+${data?.tthire_analysis || "0"} days increase`}
        bg_color="bg-[#fff]"
        value_color="text-[#575F75]"
        description_color="text-[#9E3F4E]"
        border="border-[#575F75]"
      />
      <StatCard
        title="AI Efficiency"
        value={`${data?.modelEfficiency || "0"}%`}
        description="Automated screening accuracy"
        bg_color="bg-[#0576D6]"
        value_color="text-[#F9F6FF]"
        title_color="text-[#F9F6FF]"
      />
    </div>
  );
};

export default DashboardStats;
