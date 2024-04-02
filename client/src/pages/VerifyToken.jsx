import { useLocation, useNavigate } from "react-router-dom";
import "../assets/css/style.css";
import logo from "../assets/icons/android-chrome-192x192.png";

import { Notify } from "../conponenets/Notify";

import { useState } from "react";
import { Link } from "react-router-dom";
import instance from "../utils/api";
import { setToken } from "../utils/session";
import { URLS } from "../constants";

export const VerifyToken = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isDisabled, setIsdisabled] = useState(false);
  const { state } = useLocation();
  const [payload, setPayload] = useState({
    email: state.email,
    otp: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsdisabled(true);
      const result = await instance.post(URLS.VERIFY_OTP, payload);
      setSuccess(result.data.message);
      // sends reques to http://localhost:8000/api/v1/users/login and store the response in response variable
      // navigate("/login");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (e) {
      setError(e.response.data.message);
    } finally {
      setIsdisabled(false);
      setTimeout(() => {
        setError("");
        setSuccess("");
        setPayload({
          email: "",
          otp: "",
          password: "",
        });
      }, 3000);

      // setCredentials({ email: "", password: "" });
    }
  };

  return (
    <div>
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
                  <h2>Token Verification</h2>
                </div>
                <form
                  action=""
                  className="col-12"
                  id="verifyToken"
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                >
                  <div className="row container">
                    <div className="mb-3">
                      <label className="form-label">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={payload?.email || "user@example.com"}
                        name="email"
                        required
                        disabled
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">OTP</label>
                      <input
                        type="text"
                        className="form-control"
                        id="token"
                        placeholder="Please enter the OTP "
                        name="token"
                        value={payload.otp}
                        onChange={(e) => {
                          setPayload((prevVal) => {
                            return { ...prevVal, otp: e.target.value };
                          });
                        }}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">New Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="newPassword"
                        placeholder="Please enter New Password "
                        name="password"
                        value={payload.password}
                        onChange={(e) => {
                          setPayload((prevVal) => {
                            return { ...prevVal, password: e.target.value };
                          });
                        }}
                        required
                      />
                    </div>
                    {success ||
                      (error && (
                        <Notify
                          variant={error ? "danger" : "success"}
                          msg={success || error}
                        />
                      ))}
                    <p className="m-auto">
                      <a href="" className="text-decoration-none k">
                        Resend code
                      </a>
                    </p>
                    <button
                      type="submit"
                      className="btn col-sm-7 m-auto my-3 border border-dark"
                      disabled={isDisabled}
                    >
                      Change Password
                    </button>
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
