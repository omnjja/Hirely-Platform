import RegistrationLayout from "@/components/layout/RegistrationLayout";
import React from "react";
import CandidateRegistrationForm from "../components/CandidateRegistrationForm";


const CandidateRegistration = () => {
  return (
    <RegistrationLayout
      header="Complete your candidate profile to get started"
      subhead="Candidate Application Form"
    >
      <CandidateRegistrationForm />
    </RegistrationLayout>
  );
};

export default CandidateRegistration;
