import React from "react";
import ResetPassLayout from "@/components/layout/ResetPassLayout";
import NextButton from "@/components/ui/NextButton";
import RecoveryPhoto from "@/assets//recoveryMail.webp";

const RecoveryEmail = () => {
  return (
    <ResetPassLayout
      buttonText="Back to Login"
      header="Recovery Email Sent"
      subhead="Please check your email for next steps to reset your password."
      to="/login"
      topLines={true}
      leftLines={true}
    >
      <NextButton to="/SuccessfulPassword" />
      <div className="w-md h-60 mx-auto pointer-events-none">
        <img src={RecoveryPhoto} className="w-full h-full" />
      </div>
    </ResetPassLayout>
  );
};

export default RecoveryEmail;
