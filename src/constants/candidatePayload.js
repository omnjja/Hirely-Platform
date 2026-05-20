export const candidatePayload = (data, profilePictureKey, cvKey) => {
  return {
    fullName: data.fullName,
    mobileNumber: data.mobileNumber,
    country: data.country,
    education: data.education,
    experienceLevel: data.experienceLevel,
    yearsOfExperience: Number(data.yearsOfExperience) || 0,
    profileSummary: data.profileSummary,
    currentJobTitle: data.currentJobTitle,

    skills: data.skills.map((skill) => skill.value),
    languages: data.languages.map((language) => language.value),

    linkedInUrl: data.linkedIn,
    githubUrl: data.gitHub,

    profilePictureUrl: profilePictureKey,
    cvFileUrl: cvKey,
  };
};

export const progressConfig = {
  single: [
    "fullName",
    "currentJobTitle",
    "country",
    "mobileNumber",
    "education",
    "experienceLevel",
    "profileSummary",
    "cv",
    "linkedIn",
    "gitHub",
  ],
  array: ["skills", "languages"],
};
