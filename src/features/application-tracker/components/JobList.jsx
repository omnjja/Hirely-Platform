import JobCard from "./JobCard";

const jobs = [
  {
    company: "Linear Systems",
    role: "Senior Product Designer",
    status: "INTERVIEW",
    stageLabel: "Current Stage",
    stageValue: "Stage 3 of 5",
    totalStages: 5,
    currentStage: 3,
    nextStepIcon: "📅",
    nextStepText: "Next step: Technical Interview (Oct 24)",
    actionLabel: "View Details",
    actionVariant: "ghost",
  },
  {
    company: "Stellar AI",
    role: "Machine Learning Eng.",
    status: "ACCEPTED",
    stageLabel: "Status",
    stageValue: "Completed",
    totalStages: 5,
    currentStage: 5,
    nextStepIcon: "🎉",
    nextStepText: "Next step: Offer Letter Review",
    actionLabel: "Review Offer",
    actionVariant: "solid",
  },
  {
    company: "Meridian Corp",
    role: "Full Stack Developer",
    status: "APPLIED",
    stageLabel: "Current Stage",
    stageValue: "Pending",
    totalStages: 5,
    currentStage: 0,
    nextStepIcon: "ℹ️",
    nextStepText: "Application submitted",
    actionLabel: "View Details",
    actionVariant: "ghost",
  },
  {
    company: "Prism Flow",
    role: "Lead UX Researcher",
    status: "REJECTED",
    stageLabel: "Outcome",
    stageValue: "Finalized",
    totalStages: 5,
    currentStage: 5,
    nextStepIcon: "⊘",
    nextStepText: "Position Filled",
    actionLabel: "Feedback Details",
    actionVariant: "ghost",
  },
  {
    company: "Vortex Labs",
    role: "Frontend Architect",
    status: "IN_REVIEW",
    stageLabel: "Current Stage",
    stageValue: "Stage 1 of 4",
    totalStages: 4,
    currentStage: 1,
    nextStepIcon: "⏳",
    nextStepText: "Applied 2 days ago",
    actionLabel: "View Details",
    actionVariant: "ghost",
  },
];

const JobList = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
    {jobs.map((job, i) => (
      <JobCard key={i} {...job} />
    ))}
  </div>
);

export default JobList;
