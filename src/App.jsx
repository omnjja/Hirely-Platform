import React from "react";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import RecoveryEmail from "./pages/RecoveryEmail";
import ResetPassword from "./pages/ResetPassword";
import SucessfulPassword from "./pages/SucessfulPassword";
import RoleSelection from "./pages/RoleSelection";
import CandidateRegistration from "./pages/CandidateRegistration";
import HrRegistration from "./pages/HrRegistration";
import AuthCallback from "./pages/AuthCallback ";
import CreateJobPosting from "./pages/CreateJobPosting";
import EditJobPosting from "./pages/EditJobPosting";
import RecruiterLayout from "./components/layout/RecruiterLayout";
import BrowseJobs from "./pages/BrowseJobs";
import JobDetailsPage from "./pages/JobDetailsPage";
import CandidateProfile from "./pages/CandidateProfile";
import CandidateLayout from "./components/layout/CandidateLayout";
import ApplicationTracker from "./pages/ApplicationTracker";
import HrProfile from "./pages/HrProfile";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import LandingPage from "./pages/LandingPage";
import CandidateLandingPage from "./pages/CandidateLandingPage";
import JobMatches from "./pages/JobMatches";
import JobsOverviewDashboard from "./pages/JobsOverviewDashboard";
import ScrollToTop from "./components/ScrollToTop";
import ApplicationsAnalysis from "./pages/ApplicationsAnalysis";
import WithAICard from "./components/layout/WithAICard";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route
          path="/candidate/complete-profile"
          element={<CandidateRegistration />}
        />
        <Route path="/hr/complete-profile" element={<HrRegistration />} />

        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/RecoveryEmail" element={<RecoveryEmail />} />
        <Route path="/SuccessfulPassword" element={<SucessfulPassword />} />

        <Route element={<ProtectedRoute allowedRoles={"CANDIDATE"} />}>
          <Route path="/candidate" element={<CandidateLayout />}>
            <Route index element={<CandidateLandingPage />} />
            <Route path="profile" element={<CandidateProfile />} />
            <Route path="jobs" element={<BrowseJobs />} />
            <Route path="jobs/:id" element={<JobDetailsPage />} />
            <Route path="applications" element={<ApplicationTracker />} />
            <Route path="job-matches" element={<JobMatches />} />
            <Route
              path="applications/:id/start-video-interview"
              element={<div>start video</div>}
            />
          </Route>
        </Route>

        <Route element={<ProtectedRoute allowedRoles={"HR"} />}>
          <Route path="/recruiter" element={<RecruiterLayout />}>
            <Route element={<WithAICard />}>
              <Route path="create-job-posting" element={<CreateJobPosting />} />
              <Route path="jobs" element={<BrowseJobs />} />
              <Route path="jobs/:id" element={<JobDetailsPage />} />
              <Route path="jobs/:id/edit" element={<EditJobPosting />} />
              <Route path="profile" element={<HrProfile />} />
              <Route index element={<Navigate to="analytics" replace />} />
            </Route>
            <Route path="analytics" element={<JobsOverviewDashboard />} />
            <Route
              path=":jobId/applications-analytics"
              element={<ApplicationsAnalysis />}
            />
          </Route>
        </Route>

        <Route
          path="/"
          element={
            <div>
              <LandingPage />
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
