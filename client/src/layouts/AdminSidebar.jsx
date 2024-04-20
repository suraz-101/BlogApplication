import React from "react";
import profile from "../assets/images/profile.jpeg";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const AdminSidebar = () => {
  const { pathname } = useLocation();
  const current = pathname.split("/")[2];

  return (
    <>
      <div
        className="scrollbar col-lg-2 col-sm-4 col-5 "
        style={{ minHeight: "100vh" }}
      >
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white scrollbar">
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <Link
                to="/admin"
                className={`nav-link text-white ${!current ? "active" : ""}`}
              >
                <i className="fa fa-home"></i> Home
              </Link>
            </li>
            <hr />
            <li>
              <Link
                to="/admin/users"
                className={`nav-link text-white  ${
                  current === "users" ? "active" : ""
                }`}
              >
                <i className="fa fa-users"></i> Users
              </Link>
            </li>
            <hr />
            <li>
              <Link
                to="/admin/blogs"
                className={`nav-link text-white ${
                  current === "blogs" ? "active" : ""
                }`}
              >
                <i className="fa fa-file"></i> Blogs
              </Link>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </>
  );
};
