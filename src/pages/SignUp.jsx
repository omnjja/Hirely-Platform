import React from "react";
import SignupForm from "@/features/auth/components/SignUpForm";
import AuthLayout from "@/components/layout/AuthLayout";

const SignUp = () => {
  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
};

export default SignUp;
