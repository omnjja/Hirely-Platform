import { formatDateForInput } from "../utils/DateFormatter";

export const profileFormMapper = (profileData) => ({
  fullName: profileData.fullName ?? "",
  currentJobTitle: profileData.currentJobTitle ?? "",
  profileSummary: profileData.profileSummary ?? "",
  country: profileData.country ?? "",
  mobileNumber: profileData.mobileNumber ?? "",
  linkedInUrl: profileData.linkedInUrl ?? "",
  githubUrl: profileData.githubUrl ?? "",
  yearsOfExperience: profileData.yearsOfExperience ?? 0,
  experienceLevel: profileData.experienceLevel ?? "0",
  skills:
    profileData.skills?.map((skill) => ({
      value: skill,
    })) || [],
  languages:
    profileData.languages?.map((lang) => ({
      value: lang,
    })) || [],
  educations:
    profileData.educations?.map((edu) => ({
      id: edu.id ?? "",
      institution: edu.institution ?? "",
      degree: edu.degree ?? "",
      fieldOfStudy: edu.fieldOfStudy ?? "",
      startDate: formatDateForInput(edu.startDate) ?? "",
      endDate: formatDateForInput(edu.endDate) ?? "",
      description: edu.description ?? "",
    })) ?? [],
  experiences:
    profileData.experiences?.map((e) => ({
      id: e.id ?? "",
      jobTitle: e.jobTitle ?? "",
      companyName: e.companyName ?? "",
      location: e.location ?? "",
      startDate: formatDateForInput(e.startDate) ?? "",
      endDate: formatDateForInput(e.endDate) ?? "",
      description: e.description ?? "",
      isCurrent: e.isCurrent ?? "",
    })) ?? [],
  equalEmployment: {
    gender: profileData.equalEmployment?.gender ?? "",
    raceOrEthnicity: profileData.equalEmployment?.raceOrEthnicity ?? "",
    veteranStatus: profileData.equalEmployment?.veteranStatus ?? "",
    disabilityStatus: profileData.equalEmployment?.disabilityStatus ?? "",
  },
});
