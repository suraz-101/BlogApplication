import logo from "../assets/icons/android-chrome-192x192.png";
import "../assets/css/style.css";
import { Link, useNavigate } from "react-router-dom";
import { decodeJwt, getToken } from "../utils/session";
import { createContext, useEffect, useState } from "react";
import { Notify } from "../conponenets/Notify";

import instance from "../utils/api";
import { URLS } from "../constants";

export const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleClick = async (e) => {
    try {
      e.preventDefault();
      const response = await instance.post(URLS.GENERATE_OTP, { email }); // sends reques to http://localhost:8000/api/v1/users/login and store the response in response variable
      alert(response.data.message);
      navigate("/verifyToken", { state: { email } });
    } catch (e) {
      setError(e.response.data.message);
    } finally {
      setTimeout(() => {
        setError("");
      }, 3000);
      // setCredentials({ email: "", password: "" });
    }
  };

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
              <form
                action=""
                className="col-12 "
                id="forgetPasswordForm "
                onSubmit={(e) => handleClick(e)}
              >
                <div className="row container">
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Email - example@gmail.com"
                      name="email"
                      // value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="text-de">
                    {error && <Notify variant="danger" msg={error} />}
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
