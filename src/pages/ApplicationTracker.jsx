import ApplicationHeader from "@/features/application-tracker/components/ApplicationHeader";
import MatchCard from "@/features/application-tracker/components/MatchCard";
import SummaryCard from "@/features/application-tracker/components/SummaryCard";
import React from "react";
import { SendHorizontal, Calendar } from "lucide-react";
import ApplicationStatus from "@/features/application-tracker/components/ApplicationStatus";
import JobList from "@/features/application-tracker/components/JobList";

const ApplicationTracker = () => {
  return (
    <div>
      <ApplicationHeader />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <MatchCard />
        <div className="grid grid-cols-2 gap-6">
          <SummaryCard
            icon={<SendHorizontal color="#0576D6" />}
            sum="24"
            description="Total Applied"
          />
          <SummaryCard
            icon={<Calendar color="#0576D6" />}
            sum="3"
            description="Upcoming Interviews"
          />
        </div>
      </div>
      <ApplicationStatus />
      <JobList />
    </div>
  );
};

export default ApplicationTracker;
