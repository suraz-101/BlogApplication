import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { decodeJwt, getToken, removeToken, removeUser } from "../utils/session";
import logo from "../assets/icons/android-chrome-192x192.png";
import profile from "../assets/images/profile.jpeg";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setUseStrictShallowCopy } from "immer";
import { getUser } from "../utils/login";

export const AdminNavbar = () => {
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const handleLogout = async () => {
    removeToken();
    removeUser();
    navigate("/login");
  };

  useEffect(() => {
    const user = JSON.parse(getUser());

    setUser(user);
  }, []);

  return (
    <>
      <div
        className="nav container-fluid p-2"
        style={{ position: "relative", zIndex: "1" }}
      >
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
              style={{ height: "30px", width: "30px", borderRadius: "50%" }}
            />
            <span> {user?.name}</span>
            <span className="mx-2 p-3">
              {/* {user?.role?.length>0 && user?.role.includes("admin") && ()} */}
              <button
                className="btn btn-outline-none border border-dark"
                onClick={(e) => {
                  handleLogout(e);
                }}
              >
                Logout
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
