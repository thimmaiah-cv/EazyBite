import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, requiredRole = "admin" }) {
  const { user, initializing, role } = useAuth();

  if (initializing) {
    // or show a nice loader component
    return (
      <div className="bg-[#F5F9F8] min-h-screen flex items-center justify-center">
        <div className="text-[#223239 font-raleway font-semibold text-2xl">
          Checking authentication...
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin" replace />;
  }

  if (requiredRole && role !== requiredRole) {
    // optionally show a "not authorized" page
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F9F8] text-[#223239]">
        <div className="max-w-xl text-center p-8 bg-white border-[#E5E5E50] border-[3px] rounded-md">
          <h2 className="text-4xl text-[#223239] font-raleway font-semibold mb-2">Access denied</h2>
          <p className="text-lg font-raleway font-normal text-[#717182] mb-4">
            Your account does not have permission to view this page.
          </p>
        </div>
      </div>
    );
  }

  return children;
}
