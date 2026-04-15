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

    linkedIn: data.linkedIn,
    gitHub: data.gitHub,

    profilePictureUrl: profilePictureKey,
    cvFileUrl: cvKey,
  };
};
