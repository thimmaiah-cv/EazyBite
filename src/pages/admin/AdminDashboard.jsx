import React from "react";
import { useAuth } from "../../context/AuthContext";

export default function AdminDashboard() {
  const { user, logout } = useAuth();

  return (
    <div>
      <div className="min-h-screen p-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <header className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <div className="text-sm text-slate-300">{user?.email}</div>
              <button
                onClick={logout}
                className="px-3 py-1 rounded bg-red-600 hover:bg-red-700"
              >
                Sign Out
              </button>
            </div>
          </header>

          <div className="bg-slate-800 p-4 rounded">
            KOT / Orders will appear here.
          </div>
        </div>
      </div>
    </div>
  );
}
