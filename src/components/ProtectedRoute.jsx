import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function ProtectedRoute({ children }) {
  const { session } = useContext(AuthContext);
  if (!session) {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
}
