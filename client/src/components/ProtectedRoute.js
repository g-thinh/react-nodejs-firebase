import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ redirect = "/", children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={redirect} replace />;
  }

  return children;
}
