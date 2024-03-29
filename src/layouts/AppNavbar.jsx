import "../assets/css/index.css";
import { Link } from "react-router-dom";
import logo from "../assets/icons/android-chrome-192x192.png";
// import { FaSearch } from "react-icons";
export const AppNavbar = () => {
  return (
    <>
      <div className="container-fluid bg-light sticky-top">
        <nav className="nav m-auto container navbar navbar-expand-lg navbar-light bg-light justify-content-between w-100 row">
          <a className="navbar-brand col-sm-2" href="./index.html">
            <img src={logo} style={{ height: "50px", width: "50px" }} alt="" />
          </a>
          <button
            className="navbar-toggler col-sm-2"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse col-md-10 justify-content-between"
            id="navbarSupportedContent"
          >
            <div className="col-4">
              <div className="col-lg-12">
                <div className="input-group">
                  <div className="input-group-text">
                    <i className="fa fa-search"></i>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Blogs"
                  />
                </div>
              </div>
            </div>
            <ul className="navbar-nav  justify-content-between col-6 ">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link ">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="./blogs.html">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-4 button " to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
