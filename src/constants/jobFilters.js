import { JOB_TYPES, EXPERIENCE_LEVELS } from "@/constants/jobEnums";

const DATE_POSTED_OPTIONS = [
  "Today",
  "Last 3 days",
  "Last week",
  "Last 2 weeks",
  "Last month",
];

const DEPARTMENTS = [
  "Engineering",
  "Design",
  "Marketing",
  "Sales",
  "Finance",
  "HR",
  "Product",
  "Operations",
];

const LOCATIONS = [
  "Remote",
  "New York",
  "San Francisco",
  "London",
  "Berlin",
  "Dubai",
  "Cairo",
  "Toronto",
];

export const FILTERS_CONFIG = [
  {
    key: "title",
    placeholder: "Job Title",
    options: [
      "Engineer",
      "Designer",
      "Manager",
      "Analyst",
      "Developer",
      "Consultant",
    ].map((v) => ({ value: v, label: v })),
  },
  {
    key: "department",
    placeholder: "Department",
    options: DEPARTMENTS.map((v) => ({ value: v, label: v })),
  },
  {
    key: "jobType",
    placeholder: "Job Type",
    options: JOB_TYPES, 
  },
  {
    key: "location",
    placeholder: "Location",
    options: LOCATIONS.map((v) => ({ value: v, label: v })),
  },
  {
    key: "experienceLevel",
    placeholder: "Experience",
    options: EXPERIENCE_LEVELS, 
  },
  {
    key: "datePosted",
    placeholder: "Date Posted",
    options: DATE_POSTED_OPTIONS.map((v) => ({ value: v, label: v })),
  },
];

export const INITIAL_FILTERS = {
  title: "",
  department: "",
  jobType: "",
  location: "",
  experienceLevel: "",
  datePosted: "",
};
