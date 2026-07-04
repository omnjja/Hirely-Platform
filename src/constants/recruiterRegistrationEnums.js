import { Briefcase, Users, User, BarChart3, FilePlus2 } from "lucide-react";

export const menuItems = [
  {
    icon: FilePlus2,
    path: "/recruiter/create-job-posting",
    label: "New Job",
  },
  { icon: Briefcase, path: "/recruiter/jobs", label: "Jobs" },
  { icon: BarChart3, path: "/recruiter/analytics", label: "Analytics" },
  { icon: User, path: "/recruiter/profile", label: "Profile" },
];

export const COMPANYINDUSTRY = [
  { value: "TECHNOLOGY", label: "Technology" },
  { value: "FINANCE", label: "Finance" },
  { value: "HEALTHCARE", label: "Healthcare" },
];

export const COMPANYSIZE = [
  { value: "1-10", label: "1-10 employees" },
  { value: "11-50", label: "11-50 employees" },
  { value: "51-200", label: "51-200 employees" },
  { value: "201-1000", label: "201-1000 employees" },
  { value: "1000+", label: "1000+ employees" },
];
