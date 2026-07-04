import { useNavigate } from "react-router-dom";

const useAppNavigate = () => {
  const navigate = useNavigate();

  return {
    custom: (path) => navigate(path),
    back: () => navigate(-1),
    toHome: () => navigate("/"),
    toLogin: () => navigate("/login"),
    toSignup: () => navigate("/signup"),
    toForgotPassword: () => navigate("/ForgotPassword"),
    toSuccessfulResetPassword: () => navigate("/SuccessfulPassword"),
    toRoleSelection: () => navigate("/role-selection"),
    toRegisterCandidate: () => navigate("/candidate/complete-profile"),
    toRegisterHr: () => navigate("/recruiter/complete-profile"),
    toCandidate: () => navigate("/candidate"),
    toHr: () => navigate("/recruiter"),
    toViewJobDetails: (id) => navigate(id),
    toCreateJob: () => navigate("/recruiter/create-job-posting"),
    toEditJob: (id) => navigate(`${id}/edit`),
    toCandidateProfile: () => navigate("/candidate/profile"),
    toCandidateJobs: () => navigate("/candidate/jobs"),
    toCandidateApplications: () => navigate("/candidate/applications"),
    toHrProfile: () => navigate("/recruiter/hr-profile"),
    toCreateJobPosting: () => navigate("/recruiter/create-job-posting"),
    toCandidateLandingPage: () => navigate("/candidate"),
    toStartInterview: (applicationId) =>
      navigate(
        `/candidate/applications/${applicationId}/start-video-interview`,
      ),
    toInterviewSession: (interviewId) =>
      navigate(`/candidate/interviews/${interviewId}/video-interview-session/`),
    toSubmitInterview: (interviewId) =>
      navigate(`/candidate/interviews/${interviewId}/submit-video-interview/`),
    toApplicationsDashboard: (jobId) =>
      navigate(`/recruiter/${jobId}/applications-analytics`),
  };
};

export default useAppNavigate;
