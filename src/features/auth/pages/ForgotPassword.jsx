import React, { useState } from "react";
import ResetPassLayout from "../../../components/layout/ResetPassLayout";
import InputField from "../../../components/ui/InputField";
import NextButton from "../../../components/ui/NextButton";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <ResetPassLayout
      header="Reset Your Password"
      subhead="Type in your registered email address to reset password"
      buttonText="Back to Login"
      to="/login"
    >
      <InputField
        label="Email Address"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <NextButton disabled={!email} to="/RecoveryEmail" />
    </ResetPassLayout>
  );
};

export default ForgotPassword;
