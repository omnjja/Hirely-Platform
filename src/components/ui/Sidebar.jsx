import React from "react";
import { Bell, HelpCircle, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Sidebar = ({ menuItems, isMobile = false, setIsOpen }) => {
  return (
    <div
      className={`
        bg-white border-r-[1.5px] border-r-[#E5E7EB]
        h-screen sticky top-0
        ${isMobile ? "w-40 items-start px-4" : "w-20 items-center"} 
         flex flex-col justify-between py-4
        transition-all duration-300
      `}
    >
      <div className="flex flex-col items-center w-full gap-6">
        <div className="w-full flex justify-center">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <div className="flex flex-col gap-6 w-full">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <NavLink
                to={item.path}
                onClick={() => isMobile && setIsOpen(false)}
                key={index}
                className={({ isActive }) =>
                  `
                  flex items-center gap-3 text-sm px-2 py-2 rounded-lg
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
        className={`
        flex gap-6 text-gray-500
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