import React from "react";
import { Outlet } from "react-router-dom";
import { AdminNavbar } from "./AdminNavbar";

export const AdminLayout = () => {
  return (
    <div>
      <AdminNavbar />
      <Outlet />
    </div>
  );
};
