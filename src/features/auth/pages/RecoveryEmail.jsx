import React from "react";
import ResetPassLayout from "../../../components/layout/ResetPassLayout";
import NextButton from "../../../components/ui/NextButton";
import RecoveryPhoto from "../../../assets/RecoveryPhoto.png";

const RecoveryEmail = () => {
  return (
    <ResetPassLayout
      buttonText="Back to Login"
      header="Recovery Email Sent"
      subhead="Please check your email for next steps to reset your password."
      to="/login"
    >
      <NextButton to="/SuccessfulPassword" />
      <div className="w-45 h-45 mx-auto mb-5">
        <img src={RecoveryPhoto} className="w-full h-full" />
      </div>
    </ResetPassLayout>
  );
};

export default RecoveryEmail;
