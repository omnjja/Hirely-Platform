import React from "react";
import { LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useLogout } from "@/features/auth/hooks/useLogout";

const Sidebar = ({ menuItems, isMobile = false, setIsOpen }) => {
  const userRole = localStorage.getItem("userRole");
  const handleLogout = useLogout();

  const bottomItems = (
    <>
      <div
        className="flex items-center gap-3 text-sm text-gray-500 hover:text-[#EF4444] cursor-pointer transition"
        onClick={handleLogout}
      >
        <LogOut className="w-5 h-5" />
        {isMobile && <span>Logout</span>}
      </div>
    </>
  );

  return (
    <div
      className={`
        bg-white border-r-[1.5px] border-r-[#E5E7EB]
        h-screen sticky top-0
        ${isMobile ? "w-40 items-start px-4" : "w-20 items-center"}
        flex flex-col pb-6
        ${isMobile ? "" : "justify-between"}
        transition-all duration-300
      `}
    >
      <div className="flex flex-col items-center w-full gap-6">
        <div className="w-full flex justify-center">
          <NavLink to={userRole === "HR" ? "/" : "/candidate"}>
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
                  `flex items-center gap-3 text-sm py-2 rounded-lg
                   transition-all duration-200 hover:text-[#1B41AA]
                   ${isActive ? "text-[#1B41AA]" : "text-gray-500"}
                   ${isMobile ? "justify-start" : "flex-col justify-center"}`
                }
              >
                <Icon className="w-5 h-5" />
                {isMobile && <span>{item.label}</span>}
                {!isMobile && <span className="text-xs">{item.label}</span>}
              </NavLink>
            );
          })}
        </div>
        {isMobile && (
          <div className="flex flex-col gap-6 w-full">{bottomItems}</div>
        )}
      </div>

      {!isMobile && (
        <div className="flex flex-col gap-6 items-center w-full">
          {bottomItems}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
