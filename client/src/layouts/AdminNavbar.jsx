import React from "react";
import { useEffect, useState } from "react";
import { decodeJwt, getToken } from "../utils/session";
import logo from "../assets/icons/android-chrome-192x192.png";
import profile from "../assets/images/profile.jpeg";

export const AdminNavbar = () => {
  const [email, setEmail] = useState("");
  const token = getToken("access_token");
  const jwtPayload = decodeJwt(token);
  useEffect(() => {
    setEmail(jwtPayload.data.name);
  }, []);
  return (
    <>
      <div className="nav container-fluid p-2">
        <div className="logo col-3">
          <img
            className="mx-3"
            src={logo}
            alt=""
            style={{ height: "30px", width: "30px" }}
          />
        </div>

        <div className="logo d-flex justify-content-end align-items-center col-9">
          <span>
            <i className="fa fa-bell"></i>
          </span>
          <div className="mx-3">
            <img
              src={profile}
              alt=""
              style={{ height: "30px", width: "30px", borderRadius: " 50%" }}
            />
          </div>
        </div>
      </div>
      {/* <div className="container border d-flex justify-content-between py-2">
        <span>Admin Navbar</span>

        <span>Welcome {email}</span>
      </div> */}
    </>
  );
};
