import { useNavigate } from "react-router-dom";

const useAppNavigate = () => {
  const navigate = useNavigate();

  return {
    back: () => navigate(-1),
    toHome: () => navigate("/"),
    toLogin: () => navigate("/login"),
    toSignup: () => navigate("/signup"),
    toRoleSelection: () => navigate("/role-selection"),
    toRegisterCandidate: () => navigate("/candidate/complete-profile"),
    toRegisterHr: () => navigate("/hr/complete-profile"),
    toViewJobDetails: (id) => navigate(id),
    toEditJob: (id) => navigate(`${id}/edit`),
  };
};

export default useAppNavigate;

