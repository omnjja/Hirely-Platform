import React from "react";
import { Bell, HelpCircle, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Sidebar = ({ menuItems, isMobile = false, setIsOpen }) => {
  return (
    <div
      className={`
        h-full flex flex-col justify-between py-4
        bg-[#F4F6F8] border-r border-gray-200 z-51
        ${isMobile ? "w-40 px-3" : "w-14 md:w-20 items-center"}
        transition-all duration-300 
      `}
    >
      {/* TOP */}
      <div className="flex flex-col items-center w-full gap-8">
        {/* Logo */}
        <div className="w-full flex justify-center py-2">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-2 w-full">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <NavLink
                to={item.path}
                onClick={() => isMobile && setIsOpen(false)}
                key={index}
                className={({ isActive }) =>
                  `flex items-center gap-3 text-xs px-2 py-2.5 rounded-xl
                  transition-all duration-200 hover:bg-white hover:text-[#1B41AA] hover:shadow-sm
                  ${
                    isActive
                      ? "bg-white text-[#1B41AA] shadow-sm font-medium"
                      : "text-gray-500"
                  }
                  ${isMobile ? "justify-start" : "flex-col justify-center"}
                  `
                }
              >
                <Icon className="w-5 h-5 shrink-0" />
                {isMobile && <span className="text-sm">{item.label}</span>}
                {!isMobile && (
                  <span className="text-[10px] text-center hidden md:block">
                    {item.label}
                  </span>
                )}
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* BOTTOM */}
      <div
        className={`flex gap-4 text-gray-400
          ${isMobile ? "justify-start px-2" : "flex-col items-center"}
        `}
      >
        <Bell className="w-5 h-5 hover:text-[#1B41AA] cursor-pointer transition" />
        <HelpCircle className="w-5 h-5 hover:text-[#1B41AA] cursor-pointer transition" />
        <Settings className="w-5 h-5 hover:text-[#1B41AA] cursor-pointer transition" />
      </div>
    </div>
  );
};

export default Sidebar;
