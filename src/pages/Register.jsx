import logoIcon from "../assets/icons/android-chrome-192x192.png";
import "../assets/css/style.css";

import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div>
      <div
        className="container-fluid main d-flex justify-content-center align-items-center border bg-light"
        style={{ height: "100vh" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-10 col-sm-10 col-md-6 col-lg-4 m-auto">
              <div className="p-4 rounded login-form border bg-white position-relative">
                <div
                  className="cross position-absolute top-0 end-0 text-center"
                  style={{
                    height: "30px",
                    width: "30px",
                    backgroundColor: " white",
                  }}
                >
                  <a
                    href="./index.html"
                    className="text-decoration-none text-dark"
                  >
                    <i className="fa fa-close"></i>
                  </a>
                </div>
                <div className="title col-12 p-2 text-center">
                  <a href="./index.html">
                    <img src={logoIcon} alt="" height="60px" width="60px" />
                  </a>
                  <h3>Regsiter Now</h3>
                </div>
                <form action="" className="col-12" id="registerUser">
                  <div className="row container">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputName"
                          placeholder="Cristiano Ronaldo  "
                          name="name"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail"
                          placeholder=" crish7@gmail.com"
                          name="email"
                          required
                        />
                      </div>
                      <div className="mb-3" id="password">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword"
                          placeholder="Password"
                          name="password"
                          onKeyUp={"validation()"}
                          required
                        />
                        <div
                          id="passwordValidation "
                          className="passwordValidation text-white p-4"
                        >
                          <p id="char">Required at least 9 char</p>
                          <p id="symbol">Required at least 1 symbol</p>
                          <p id="capital">Required at least 1 Uppercase</p>
                          <p id="number">Required at least 1 number</p>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="exampleInputPhonenumber"
                          placeholder="984XXXXXX"
                          name="phoneNumber"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label>Gender:</label>
                        <div className="d-flex justify-content-between ml-2">
                          <div>
                            <input
                              type="radio"
                              name="gender"
                              value="Male"
                              className="exampleInputGender"
                            />
                            <label className="form-label">Male</label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="gender"
                              value="Female"
                              className="exampleInputGender"
                            />
                            <label className="form-label">Female</label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="gender"
                              value="Others"
                              className="exampleInputGender"
                            />
                            <label className="form-label">Others</label>
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        id="regsiterButton"
                        className="btn col-sm-5 m-auto mb-2 border border-dark "
                      >
                        Register
                      </button>
                      <label className="p-2 d-flex justify-content-center align-items-center">
                        Already have an account?
                        <Link
                          className="px-2 text-decoration-none"
                          px-2
                          text-decoration-none
                          to="/login"
                        >
                          Sign in
                        </Link>
                      </label>
                    </form>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
