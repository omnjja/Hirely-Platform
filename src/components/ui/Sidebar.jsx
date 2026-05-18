import React from "react";
import { Bell, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import useAppNavigate from "@/hooks/useAppNavigate";
import { logout } from "@/features/auth/services/authService";
import toast from "react-hot-toast";

const Sidebar = ({ menuItems, isMobile = false, setIsOpen }) => {
  const { toLogin } = useAppNavigate();

  async function handleLogout() {
    try {
      await logout();
    } catch (error) {
      toast.error(error.message || "Logout failed. Please try again.");
    }
    localStorage.clear();
    toLogin();
  }
  return (
    <div
      className={`
        bg-white border-r-[1.5px] border-r-[#E5E7EB]
        h-screen sticky top-0
        ${isMobile ? "w-40 items-start px-4" : "w-20 items-center"} 
         flex flex-col justify-between pb-6
        transition-all duration-300
      `}
    >
      <div className="flex flex-col items-center w-full gap-6">
        <div className="w-full flex justify-center">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <div className="flex flex-col gap-3 w-full text-center">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <NavLink
                to={item.path}
                onClick={() => isMobile && setIsOpen(false)}
                key={index}
                className={({ isActive }) =>
                  `
                  flex items-center gap-3 text-sm py-2 rounded-lg
                  transition-all duration-200
                   hover:text-[#1B41AA]
                  ${isActive ? "text-[#1B41AA]" : "text-gray-500"}
                  ${isMobile ? "justify-start" : "flex-col justify-center"}
                  `
                }
              >
                <Icon className="w-5 h-5" />
                {isMobile && <span>{item.label}</span>}
                {!isMobile && <span className="text-xs">{item.label}</span>}
              </NavLink>
            );
          })}
        </div>
      </div>
      <div
        className={`w-full flex gap-6 text-gray-500 flex-col ${isMobile ? "items-start" : "items-center"}
      `}
      >
        <div className="flex items-center gap-3 text-sm  hover:text-[#1B41AA] cursor-pointer transition">
          <Bell className="w-5 h-5 flex items-center" />
          {isMobile && <span>notifications</span>}
        </div>
        <div
          className="flex items-center gap-3 text-sm hover:text-[#EF4444] cursor-pointer transition"
          onClick={() => handleLogout()}
        >
          <LogOut className="w-5 h-5" />
          {isMobile && <span>logout</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
