import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { decodeJwt, getToken } from "../utils/session";
import logo from "../assets/icons/android-chrome-192x192.png";
import profile from "../assets/images/profile.jpeg";

export const AdminNavbar = () => {
  // const [name, setName] = useState("");
  // const token = getToken("access_token");
  // const jwtPayload = decodeJwt(token);

  // useEffect(() => {
  //   if (jwtPayload) {
  //     setName(jwtPayload.data.name);
  //   }
  // }, [jwtPayload]);

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

          <div class="mx-3">
            <img
              src={profile}
              alt=""
              style={{ height: "30px", width: "30px", borderRadius: "50%" }}
            />
            <span className="mx-2 p-3">
              <button
                className="btn btn-outline-none border border-primary"
                onClick={() => {
                  console.log("clicked");
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
