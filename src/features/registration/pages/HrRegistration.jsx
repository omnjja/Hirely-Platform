import React from "react";
import RegistrationLayout from "@/components/layout/RegistrationLayout";
import HrRegistrationForm from "../components/HrRegistrationForm";

const HrRegistration = () => {
  return (
    <RegistrationLayout
      header="Register your company to start finding talent"
      subhead="HR/Recruiter Application Form"
    >
      <HrRegistrationForm />
    </RegistrationLayout>
  );
};

export default HrRegistration;
