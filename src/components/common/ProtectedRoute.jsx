import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user, initializing } = useAuth();

  if (initializing) {
    // or show a nice loader component
    return (
      <div className="bg-[#F5F9F8] min-h-screen flex items-center justify-center">
        <div className="text-[#223239 font-raleway font-semibold text-2xl">Checking authentication...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin" replace />;
  }

  return children;
}
