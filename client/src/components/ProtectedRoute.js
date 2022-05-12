import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ redirect = "/", children }) {
  const { user, loadingUser } = useAuth();

  if (loadingUser) {
    return <p>Loading User...</p>;
  }

  if (!user) {
    return <Navigate to={redirect} replace />;
  }

  return children;
}
