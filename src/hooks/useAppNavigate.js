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
    toEditJob: (id) => navigate(`${id}/edit`),
    toCandidateProfile: () => navigate("/candidate/profile"),
    toCandidateJobs: () => navigate("/candidate/jobs"),
    toCandidateApplications: () => navigate("/candidate/applications"),
    toHrProfile: () => navigate("/recruiter/hr-profile"),
    toCreateJobPosting: () => navigate("/recruiter/create-job-posting"),
  };
};

export default useAppNavigate;
