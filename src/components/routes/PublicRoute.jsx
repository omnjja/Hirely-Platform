import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const token = localStorage.getItem("authToken");
  const userRole = localStorage.getItem("userRole");
  if (token) {
    if (userRole === "CANDIDATE") {
      return <Navigate to="/candidate/profile" replace />;
    } else if (userRole === "HR") {
      return <Navigate to="/recruiter/profile" replace />;
    }
  }
  return <Outlet />;
};

export default PublicRoute;
