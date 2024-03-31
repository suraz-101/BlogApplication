import logo from "../assets/icons/android-chrome-192x192.png";
import "../assets/css/style.css";
import { decodeJwt, getToken } from "../utils/session";
import { useEffect, useState } from "react";

export const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <div
      className="container-fluid main d-flex justify-content-center align-items-center bg-light"
      style={{ height: " 100vh" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-sm-10 col-md-6 col-lg-4 m-auto">
            <div className="p-4 rounded login-form border bg-white">
              <div className="title col-12 p-2 text-center">
                <a href="./index.html">
                  <img src={logo} alt="" height="60px" width="60px" />
                </a>
                <h2>Forget Password</h2>
              </div>
              <form action="" className="col-12 " id="forgetPasswordForm ">
                <div className="row container">
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Email - example@gmail.com"
                      name="email"
                      value={email}
                      required
                      disabled
                    />
                  </div>
                  <button
                    type="submit"
                    id="sendCode"
                    className="btn border border-dark col-sm-5 m-auto mt-2 mb-3  "
                  >
                    Send Code
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
