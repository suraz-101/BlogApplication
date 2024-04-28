import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/android-chrome-192x192.png";
import { useNavigate } from "react-router-dom";
import { getUser } from "../utils/login";
import profile from "../assets/images/profile.jpeg";
import { removeToken, removeUser } from "../utils/session";

export const AdminNavbar = () => {
  const [username, setUsername] = useState({});

  const navigate = useNavigate();

  const handleLogout = async () => {
    removeToken();
    removeUser();
    navigate("/login");
  };

  useEffect(() => {
    const user = JSON.parse(getUser());
    setUsername(user);
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
            <span>
              {" "}
              <Link
                to="/admin/profile"
                className="text-decoration-none text-dark"
              >
                {username?.name}
              </Link>
            </span>
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
