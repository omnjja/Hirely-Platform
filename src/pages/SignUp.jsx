import React from "react";
import LeftLogo from "../components/ui/LeftLogo";
import "../index.css";

import SignupForm from "../components/layout/SignUpForm";
import AuthLayout from "../components/layout/AuthLayout";

const SignUp = () => {
  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
};

export default SignUp;
