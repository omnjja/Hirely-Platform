import { useNavigate } from "react-router-dom";

const useAppNavigate = () => {
  const navigate = useNavigate();

  return {
    toHome: () => navigate("/"),
    toLogin: () => navigate("/login"),
    toSignup: () => navigate("/signup"),
    toRoleSelection: () => navigate("/role-selection"),
    toRegisterCandidate: () => navigate("/candidate/complete-profile"),
    toRegisterHr: () => navigate("/hr/complete-profile"),
  };
};

export default useAppNavigate;

