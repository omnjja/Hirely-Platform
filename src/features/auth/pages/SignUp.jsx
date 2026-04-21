import React from "react";
import "../../../../src/index.css";

import SignupForm from "../components/SignUpForm";
import AuthLayout from "@/components/layout/AuthLayout";

const SignUp = () => {
  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
};

export default SignUp;
