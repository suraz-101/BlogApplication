import React from "react";
import { Outlet } from "react-router-dom";
import { AdminNavbar } from "./AdminNavbar";
import { AdminSidebar } from "./AdminSidebar";

export const AdminLayout = () => {
  return (
    <div>
      <AdminNavbar />
      <div className="row m-auto">
        <AdminSidebar />
        <Outlet />
      </div>
    </div>
  );
};
