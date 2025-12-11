import React from "react";
import { useAuth } from "../../context/AuthContext";
import Logo from "../../assets/img/Logo.svg";
import { LogOut, Plus } from "lucide-react";
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

      <div className="px-[5%]">
        <div className="flex justify-between mt-6">
          <h1 className="text-[#223239] font-raleway font-bold text-3xl">Restaurant Admin Dashboard</h1>
          <button className="font-medium font-raleway rounded text-white flex items-center gap-1.5 px-3.5 py-1 bg-[#1F2932]">
            <Plus size={20} color="white" />
            Add Table
          </button>
        </div>

        <div className="">
          
        </div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nobis
        illo adipisci, ea perspiciatis inventore facere, consequatur illum,
        placeat esse ipsum magnam? Dolorem hic quis tempora quos recusandae
        molestiae maxime nobis minus cum numquam quia molestias animi at, unde
        dolorum. Repudiandae velit rem possimus, sequi omnis eius, vitae dolorum
        ipsa consectetur ut, magnam voluptatum doloribus numquam iure
        repellendus nobis aspernatur qui eaque quas esse veniam quasi alias
        praesentium? Deleniti, quis dolor voluptate, laboriosam molestias
        veritatis veniam beatae quisquam consectetur ut minus minima, laborum
        facere! Doloribus dolorum dignissimos enim temporibus, tenetur id
        eveniet repudiandae tempore suscipit cupiditate voluptatum? Provident,
        velit ratione!
      </div>

      {/*  */}
    </div>
  );
}
