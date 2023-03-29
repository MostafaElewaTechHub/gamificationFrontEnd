import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  if (!localStorage.getItem("jwt")) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;
