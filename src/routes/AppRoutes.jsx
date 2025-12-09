import React from "react";
import { AuthProvider } from "../context/AuthContext";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "../pages/admin/AdminLogin";
import ProtectedRoute from "../components/common/ProtectedRoute";

export default function AppRoutes() {
  return (
    <AuthProvider>
      <Routes>
        {/* Admin login */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* Protected admin dashboard */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <div>Admin Dashboard</div>
            </ProtectedRoute>
          }
        />

        {/* Add other routes below */}
      </Routes>
    </AuthProvider>
  );
}
