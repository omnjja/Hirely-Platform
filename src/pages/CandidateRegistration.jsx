import RegistrationLayout from "@/components/layout/RegistrationLayout";
import React from "react";
import CandidateRegistrationForm from "@/features/registration/components/CandidateRegistrationForm";
import CandidateRegistrationImage from "@/assets/candidateImg.webp";

const CandidateRegistration = () => {
  return (
    <RegistrationLayout
      image={CandidateRegistrationImage}
      header="Complete your candidate profile to get started"
      subhead="Candidate Application Form"
    >
      <CandidateRegistrationForm />
    </RegistrationLayout>
  );
};

export default CandidateRegistration;
