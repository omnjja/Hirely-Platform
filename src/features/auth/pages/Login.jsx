import React from "react";
import "../../../../src/index.css";
import AuthLayout from "@/components/layout/AuthLayout";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <>
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </>
  );
};

export default Login;
