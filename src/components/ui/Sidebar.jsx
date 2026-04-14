import React from "react";
import { Bell, HelpCircle, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Sidebar = ({ menuItems }) => {
  return (
    <div className="h-screen w-20 bg-[#F4F6F8] flex flex-col justify-between items-center border-r fixed">
      <div className="flex flex-col items-center gap-6">
        <div className="w-20 h-20 flex items-center justify-center">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>

        <div className="flex flex-col gap-6">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <NavLink
                to={item.path}
                key={index}
                className={({ isActive }) =>
                  `flex flex-col items-center text-xs text-center hover:text-[#1B41AA] ${
                    isActive ? "text-[#1B41AA]" : "text-gray-500"
                  }`
                }
              >
                <Icon className="w-5 h-5 mb-1" />
                {item.label}
              </NavLink>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-6 text-gray-500 mb-2">
        <Bell className="w-5 h-5" />
        <HelpCircle className="w-5 h-5" />
        <Settings className="w-5 h-5" />
      </div>
    </div>
  );
};

export default Sidebar;
