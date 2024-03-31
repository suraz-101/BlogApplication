import React from "react";
import { useEffect, useState } from "react";
import { decodeJwt, getToken } from "../utils/session";

export const AdminNavbar = () => {
  const [email, setEmail] = useState("");
  const token = getToken("access_token");
  const jwtPayload = decodeJwt(token);
  useEffect(() => {
    setEmail(jwtPayload.data.name);
  }, []);
  return (
    <div className="container border d-flex justify-content-between py-2">
      <span>Admin Navbar</span>

      <span>Welcome {email}</span>
    </div>
  );
};
