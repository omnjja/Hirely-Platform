import {
  Briefcase,
  FileText,
  User,
  ClipboardCheck,
  Video,
  Clipboard,
} from "lucide-react";

export const CANDIDATEMENUITEMS = [
  { icon: Briefcase, path: "/candidate/jobs", label: "Jobs" },
  { icon: FileText, path: "/candidate/resume", label: "Resume" },
  { icon: User, path: "/candidate/profile", label: "Profile" },
  {
    icon: ClipboardCheck,
    path: "/candidate/applications",
    label: "Applications",
  },
  { icon: Video, path: "/candidate/interviews", label: "Video Interviews" },
  { icon: Clipboard, path: "/candidate/job-matches", label: "Matches" },
];
