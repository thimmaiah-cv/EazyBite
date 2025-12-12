import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Logo from "../../assets/img/Logo.svg";
import { LogOut, Plus } from "lucide-react";
import UserAvatar from "../../components/admin/UserAvatar";
import DashboardContent from "./DashboardContent";
import TablesContent from "./TablesContent";
import OrdersContent from "./OrdersContent";
import MenuContent from "./MenuContent";
import ProfileContent from "./ProfileContent";

export default function AdminDashboard() {
  const { user, logout } = useAuth();

  const tabs = [
    { id: "dashboard", name: "Dashboard", component: DashboardContent },
    { id: "tables", name: "Tables", component: TablesContent },
    { id: "orders", name: "Orders (KOT)", component: OrdersContent },
    { id: "menu", name: "Menu", component: MenuContent },
    { id: "profile", name: "Profile", component: ProfileContent },
  ];

  const [activeTab, setActiveTab] = useState("dashboard");
  // Find the component associated with the active tab
  const ActiveComponent =
    tabs.find((tab) => tab.id === activeTab)?.component || DashboardContent;

  return (
    <div className="bg-[#F5F9F8] flex flex-col min-h-screen w-screen">
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

      <div className="px-[5%] flex-grow">
        <div className="flex justify-between mt-6">
          <h1 className="text-[#223239] font-raleway font-bold text-3xl">
            Restaurant Admin Dashboard
          </h1>
          <button
            className="font-medium font-raleway rounded text-white flex items-center gap-1.5 px-3.5 py-1 bg-[#1F2932] 
           hover:shadow-md hover:shadow-[#c0c0c0] hover:bg-[rgba(31,41,50,0.98)] transition"
          >
            <Plus size={20} color="white" />
            Add Table
          </button>
        </div>
        <div className="bg-[#ECECF0] p-[5px] rounded-full mt-4 flex justify-evenly gap-1.5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`transition-colors duration-200 w-full text-lg font-raleway 
                py-1 text-[#1F2932] font-semibold rounded-full
                ${
                  activeTab === tab.id
                    ? "bg-white shadow-sm"
                    : "hover:bg-white hover:shadow-sm"
                }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <ActiveComponent />
      </div>

      {/*  */}
    </div>
  );
}
