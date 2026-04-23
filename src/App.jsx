import React from "react";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import RecoveryEmail from "./pages/RecoveryEmail";
import SucessfulPassword from "./pages/SucessfulPassword";
import RoleSelection from "./pages/RoleSelection";
import CandidateRegistration from "./pages/CandidateRegistration";
import HrRegistration from "./pages/HrRegistration";
import AuthCallback from "./pages/AuthCallback ";
import CandidateProfile from "./features/candidate/pages/CandidateProfile";

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
          path="/candidate/complete-profile"
          element={<CandidateRegistration />}
        />
        <Route path="/hr/complete-profile" element={<HrRegistration />} />
        <Route path="/candidate/profile" element={<CandidateProfile />} />
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
              <Link to="/candidate/complete-profile" className="text-primary">
                Go to Candidate Registration
              </Link>
              <Link to="/hr/complete-profile" className="text-primary">
                Go to HR Registration
              </Link>
              <Link to="/candidate/profile" className="text-primary">
                Go to Candidate Profile
              </Link>
            </div>
          }
        />
        <Route path="/auth/callback" element={<AuthCallback />} />
      </Routes>
      <Toaster position="top-center" />
    </BrowserRouter>
  );
}

export default App;
