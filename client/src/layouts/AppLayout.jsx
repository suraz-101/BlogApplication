import { Outlet } from "react-router-dom";
import { AppNavbar } from "./AppNavbar";
import { Footer } from "./Footer";

export const AppLayout = () => {
  return (
    <div>
      <AppNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};
