import { JOB_TYPES, EXPERIENCE_LEVELS } from "@/constants/jobEnums";

const LOCATIONS = [
  "Cairo",
  "Giza",
  "Alexandria",
  "New Cairo",
  "6th of October",
  "Sheikh Zayed",
  "Nasr City",
  "Heliopolis",
  "Maadi",
  "Smart Village",
  "Mansoura",
  "Tanta",
  "Zagazig",
  "Ismailia",
  "Suez",
  "Port Said",
  "Damietta",
  "Assiut",
  "Minya",
  "Sohag",
];

export const WORKPLACE_TYPES = [
  { value: "REMOTE", label: "Remote" },
  { value: "HYBRID", label: "Hybrid" },
  { value: "ONSITE", label: "On-site" },
];

export const INDUSTRIES = [
  { value: "TECHNOLOGY", label: "Technology" },
  { value: "FINANCE", label: "Finance" },
  { value: "HEALTHCARE", label: "Healthcare" },
  { value: "EDUCATION", label: "Education" },
  { value: "ECOMMERCE", label: "E-commerce" },
  { value: "MARKETING", label: "Marketing" },
  { value: "CONSULTING", label: "Consulting" },
  { value: "MANUFACTURING", label: "Manufacturing" },
  { value: "OTHER", label: "Other" },
];

export const DATE_POSTED_OPTIONS = [
  { value: "24h", label: "Last 24 Hours" },
  { value: "7d", label: "Last 7 Days" },
  { value: "30d", label: "Last 30 Days" },
];

export const FILTERS_CONFIG = [
  {
    key: "jobType",
    placeholder: "Job Type",
    options: JOB_TYPES,
  },
  {
    key: "experienceLevel",
    placeholder: "Experience",
    options: EXPERIENCE_LEVELS,
  },
  {
    key: "workplaceType",
    placeholder: "Workplace Type",
    options: WORKPLACE_TYPES,
  },
  {
    key: "location",
    placeholder: "Location",
    options: LOCATIONS.map((v) => ({
      value: v,
      label: v,
    })),
  },
  {
    key: "industry",
    placeholder: "Industry",
    options: INDUSTRIES,
  },
  {
    key: "datePosted",
    placeholder: "Date Posted",
    options: DATE_POSTED_OPTIONS,
  },
  {
    key: "applied",
    placeholder: "Application Status",
    options: [
      { value: true, label: "Applied" },
      { value: false, label: "Not Applied" },
    ],
  },
];

export const INITIAL_FILTERS = {
  jobType: "",
  experienceLevel: "",
  workplaceType: "",
  location: "",
  industry: "",
  datePosted: "",
  applied: "",
};
