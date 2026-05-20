import React from "react";
import RegistrationLayout from "@/components/layout/RegistrationLayout";
import HrRegistrationForm from "@/features/registration/components/HrRegistrationForm";
import HrRegistrationImage from "@/assets/hrImg.webp";

const HrRegistration = () => {
  return (
    <RegistrationLayout
      image={HrRegistrationImage}
      header="Register your company to start finding talent"
      subhead="HR/Recruiter Application Form"
    >
      <HrRegistrationForm />
    </RegistrationLayout>
  );
};

export default HrRegistration;
