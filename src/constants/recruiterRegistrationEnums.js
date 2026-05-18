import { Briefcase, Users, User, BarChart3 } from "lucide-react";

export const menuItems = [
  { icon: User, path: "/recruiter/hr-profile", label: "Profile" },
  { icon: Briefcase, path: "/jobs", label: "Jobs" },
  { icon: Users, path: "/candidates", label: "Candidates" },
  { icon: BarChart3, path: "/analytics", label: "Analytics" },
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
