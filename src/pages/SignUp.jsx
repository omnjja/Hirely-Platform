import React from "react";
import LeftLogo from "../components/ui/LeftLogo";
import "../index.css";

import SignupForm from "../components/layout/SignUpForm";

const SignUp = () => {
  return (
    <div className="flex bg-gray-300 w-full h-full">
      <div>
        <LeftLogo />
      </div>
      <div>Sign Up Form</div>
      <SignupForm />
    </div>
  );
};

export default SignUp;
