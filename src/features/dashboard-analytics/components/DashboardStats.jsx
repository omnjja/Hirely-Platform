import StatCard from "@/components/ui/StatCard";
import React from "react";

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard
        title="Total Applicants"
        value="1,234"
        description="+12% vs last month"
        bg_color="bg-[#fff]"
        value_color="text-[#0576D6]"
        description_color="text-[#0576D6]"
      />
      <StatCard
        title="Interview Rate"
        value="18.4%"
        description="Standard baseline: 15%"
        bg_color="bg-[#fff]"
        value_color="text-[#2A3439]"
        description_color="text-[#566166]"
      />
      <StatCard
        title="Time to Hire"
        value="22d"
        description="+2 days increase"
        bg_color="bg-[#fff]"
        value_color="text-[#575F75]"
        description_color="text-[#9E3F4E]"
        border="border-[#575F75]"
      />
      <StatCard
        title="AI Efficiency"
        value="94%"
        description="Automated screening accuracy"
        bg_color="bg-[#0576D6]"
        value_color="text-[#F9F6FF]"
        title_color="text-[#F9F6FF]"
      />
    </div>
  );
};

export default DashboardStats;
