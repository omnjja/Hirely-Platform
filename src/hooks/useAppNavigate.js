import { useNavigate } from "react-router-dom";

const useAppNavigate = () => {
  const navigate = useNavigate();

  return {
    back: () => navigate(-1),
    toHome: () => navigate("/"),
    toLogin: () => navigate("/login"),
    toSignup: () => navigate("/signup"),
    toSuccessfulResetPassword: () => navigate("/SuccessfulPassword"),
    toRoleSelection: () => navigate("/role-selection"),
    toRegisterCandidate: () => navigate("/candidate/complete-profile"),
    toRegisterHr: () => navigate("/hr/complete-profile"),
    toViewJobDetails: (id) => navigate(id),
    toCreateJob: () => navigate("/recruiter/create-job-posting"),
    toEditJob: (id) => navigate(`${id}/edit`),
    toCandidateProfile: () => navigate("/candidate/profile"),
    toCandidateJobs: () => navigate("/candidate/jobs"),
    toCandidateApplications: () => navigate("/candidate/applications"),
    toHrProfile: () => navigate("/recruiter/hr-profile"),
    toCreateJobPosting: () => navigate("/recruiter/create-job-posting"),
    toCandidateLandingPage: () => navigate("/candidate"),
    toApplicationsDashboard: (applicationId) =>
      navigate(`/recruiter/${applicationId}/applications-dashboard`),
    toStartInterview: () => navigate(`recruiter/start-video-interview`),
  };
};

export default useAppNavigate;
