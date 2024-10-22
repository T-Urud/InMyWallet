import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <aside>
    <nav className="w-[calc(100% - 16px)] h-screen my-4 border border-[#939ce4] rounded-lg ml-4 area-sidebar">
      <ul className="flex flex-col gap-2 pt-2">
        <NavLink to="/dashboard">
          <li className="h-10 flex items-center p-2 ">Dashboard</li>
        </NavLink>
        <NavLink to="/accounts">
          <li className="h-10 flex items-center p-2">Accounts</li>
        </NavLink>
        <NavLink to="/budgeting">
          <li className="h-10 flex items-center p-2">Budgeting</li>
        </NavLink>
        <NavLink to="/income-tracking">
          <li className="h-10 flex items-center p-2">Income Tracking</li>
        </NavLink>
        <NavLink to="/saving-goals">
          <li className="h-10 flex items-center p-2">Saving Goals</li>
        </NavLink>
        <NavLink to="/saving-goals">
          <li className="h-10 flex items-center p-2">Profile</li>
        </NavLink>
        <NavLink to="/saving-goals">
          <li className="h-10 flex items-center p-2">Settings</li>
        </NavLink>
        <NavLink to="/register">
          <li className="h-10 flex items-center p-2">Login</li>
        </NavLink>
      </ul>
    </nav>
  </aside>
);

export default Navigation;
