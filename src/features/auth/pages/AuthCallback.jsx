import useAppNavigate from "@/hooks/useAppNavigate";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallback = () => {
  const navigate = useNavigate();
  // const {toRoleSelection} = useAppNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    // const isNewUser = params.get("isNewUser") === "true";

    if (token) {
      localStorage.setItem("authToken", token);
      // isNewUser ? toRoleSelection() : navigate("/", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  }, []);

  return <p>Redirecting...</p>;
};

export default AuthCallback;
