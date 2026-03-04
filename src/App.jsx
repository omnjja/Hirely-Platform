import React from "react";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import SignUp from "./features/auth/pages/SignUp";
import ForgotPassword from "./features/auth/pages/ForgotPassword";
import RecoveryEmail from "./features/auth/pages/RecoveryEmail";
import SucessfulPassword from "./features/auth/pages/SucessfulPassword";
import RoleSelection from "./features/registration/pages/RoleSelection";
import CandidateRegistration from "./features/registration/pages/CandidateRegistration";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/RecoveryEmail" element={<RecoveryEmail />} />
        <Route path="/SuccessfulPassword" element={<SucessfulPassword />} />
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route
          path="/candidate-registration"
          element={<CandidateRegistration />}
        />
        <Route
          path="/"
          element={
            <div className="flex flex-col items-center justify-center h-screen gap-4">
              <Link to="/login" className="text-primary">
                Go to Login
              </Link>
              <Link to="/signup" className="text-primary">
                Go to Sign Up
              </Link>
              <Link to="/role-selection" className="text-primary">
                Go to Role Selection
              </Link>
            </div>
          }
        />
      </Routes>
      <Toaster position="top-center" />
    </BrowserRouter>
  );
}

export default App;
