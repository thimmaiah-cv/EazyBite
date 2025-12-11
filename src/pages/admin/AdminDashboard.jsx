import React from "react";
import { useAuth } from "../../context/AuthContext";
import Logo from "../../assets/img/Logo.svg";
import { LogOut } from "lucide-react";
import UserAvatar from "../../components/admin/UserAvatar";

export default function AdminDashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="bg-[#F5F9F8] min-h-screen w-screen">
      <header className="bg-white px-[5%] py-[12px] drop-shadow-md flex justify-between items-center">
        <img src={`${Logo}`} className="h-8 w-auto" alt="EazyBite Logo" />
        <div className="gap-6 flex items-center">
          <span className="flex items-center gap-2 font-raleway font-medium text-[#223239]">
            <UserAvatar email={user.email} />
            {user?.email}
          </span>
          <button
            onClick={logout}
            className="group border-[#1F2932] border-[2px] font-semibold font-raleway rounded flex items-center gap-2 px-3 py-1 hover:bg-[#1F2932] hover:text-white transition"
          >
            <LogOut
              size={20}
              className="text-[#1F2932] group-hover:text-white transition-colors"
            />
            Sign out
          </button>
        </div>
      </header>
    </div>
  );
}
