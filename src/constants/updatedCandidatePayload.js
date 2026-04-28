export const updatedCandidatePayload = (formData) => ({
  ...formData,
  skills: formData.skills?.map((s) => s.value),
  languages: formData.languages?.map((l) => l.value),
  yearsOfExperience: Number(formData.yearsOfExperience) || 0,
  educations: formData.educations?.map((edu) => ({
    ...(edu.id && { id: edu.id }), // include id only if it exists
    institution: edu.institution,
    degree: edu.degree,
    fieldOfStudy: edu.fieldOfStudy,
    startDate: edu.startDate,
    endDate: edu.endDate,
    description: edu.description,
  })),
  experiences: formData.experiences?.map((e) => ({
    ...(e.id && { id: e.id }),
    jobTitle: e.jobTitle ?? "",
    companyName: e.companyName ?? "",
    location: e.location ?? "",
    startDate: e.startDate ?? "",
    endDate: e.endDate ?? "",
    description: e.description ?? "",
    isCurrent: e.isCurrent ?? "",
  })),
});
