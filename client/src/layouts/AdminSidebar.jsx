import React from "react";
import profile from "../assets/images/profile.jpeg";
import { Link } from "react-router-dom";

export const AdminSidebar = () => {
  return (
    <>
      <div className="row m-auto">
        <div className="scrollbar col-lg-2 col-sm-4 col-5">
          <div className="d-flex flex-column flex-shrink-0 p-3 text-white scrollbar">
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link text-decoration-none text-white active"
                >
                  <i className="fa fa-home"></i> Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white">
                  <i className="fa fa-users"></i> Users
                </a>
              </li>
              <li>
                <a href="./admin-blog.html" className="nav-link text-white">
                  <i className="fa fa-file"></i>
                  <Link to="/admin/blogs">Blogs</Link>
                </a>
              </li>
            </ul>
            <hr />
            <div className="dropdown vh-100">
              <a
                href="#"
                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={profile}
                  alt=""
                  width="32"
                  height="32"
                  className="rounded-circle me-2 border"
                />
                <strong>user</strong>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
