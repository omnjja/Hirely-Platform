import React, { useState } from "react";
import ResetPassLayout from "@/components/layout/ResetPassLayout";
import PasswordField from "@/components/ui/PasswordField";
import img from "@/assets/lowerImageForReset.webp";
import { useSearchParams } from "react-router-dom";
import { resetPassword } from "@/features/auth/services/authService";
import useAppNavigate from "@/hooks/useAppNavigate";
import toast from "react-hot-toast";

const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { toSuccessfulResetPassword } = useAppNavigate();

  function validatePasswords(newPassword, confirmPassword) {
    const newErrors = {};
    if (!PASS_REGEX.test(newPassword)) {
      newErrors.newPassword =
        "Password must contain uppercase, lowercase, number and special character";
    }
    if (confirmPassword !== newPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleResetPassword() {
    try {
      if (validatePasswords(newPassword, confirmPassword)) {
        await resetPassword(token, newPassword);
        toSuccessfulResetPassword();
      }
    } catch (error) {
      toast.error(
        error.message || "Error resetting password. Please try again.",
      );
    }
  }

  return (
    <ResetPassLayout
      buttonText="Reset Password"
      action={() => handleResetPassword()}
      header="Reset Your Password"
      subhead="Enter your new password below"
      topLines={true}
      lowerImage={
        <div className="w-full h-105 pointer-events-none">
          <img src={img} className="w-full h-full" />
        </div>
      }
    >
      <PasswordField
        label="New Password"
        name="newPassword"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        error={errors?.newPassword}
      />

      <PasswordField
        label="Confirm Password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        error={errors?.confirmPassword}
      />
    </ResetPassLayout>
  );
};

export default ResetPassword;
