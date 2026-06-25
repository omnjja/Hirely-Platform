import React, { useState } from "react";
import ResetPassLayout from "@/components/layout/ResetPassLayout";
import InputField from "@/components/ui/InputField";
import NextButton from "@/components/ui/NextButton";
import resetPass from "@/assets/resetPassImg.webp";
import { forgotPassword } from "@/features/auth/services/authService";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  async function handleForgotPassword() {
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    try {
      await forgotPassword(email);
    } catch (error) {
      toast.error(
        error.message || "Error sending password reset link. Please try again.",
      );
    }
  }

  return (
    <ResetPassLayout
      header="Reset Your Password"
      subhead="Type in your registered email address to reset password"
      buttonText="Back to Login"
      to="/login"
      topLines={true}
      lowerImage={
        <div className="w-full h-70 pointer-events-none">
          <img
            src={resetPass}
            alt="Reset Password"
            className="w-full h-full bg-cover"
          />
        </div>
      }
    >
      <InputField
        label="Email Address"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={error}
      />
      <NextButton
        disabled={!email}
        to="/RecoveryEmail"
        onClick={() => handleForgotPassword()}
      />
    </ResetPassLayout>
  );
};

export default ForgotPassword;
