import logoIcon from "../assets/icons/android-chrome-192x192.png";
import "../assets/css/style.css";
import { Notify } from "../conponenets/Notify";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import instance from "../utils/api";
import { setToken } from "../utils/session";
import { URLS } from "../constants";

export const Register = () => {
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    gender: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isDisabled, setIsdisabled] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsdisabled(true);
      const result = await instance.post(URLS.REGISTER, payload);
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
          name: "",
          email: "",
          password: "",
          phoneNumber: "",
          gender: "Male",
        });
      }, 3000);

      // setCredentials({ email: "", password: "" });
    }
  };

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
                  <Link to="/" className="text-decoration-none text-dark">
                    <i className="fa fa-close"></i>
                  </Link>
                </div>
                <div className="title col-12 p-2 text-center">
                  <Link to="/">
                    <img src={logoIcon} alt="" height="60px" width="60px" />
                  </Link>
                  <h3>Regsiter Now</h3>
                </div>
                <form
                  action=""
                  className="col-12"
                  id="registerUser"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <div className="row container">
                    <div className="mb-3">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputName"
                        placeholder="Cristiano Ronaldo  "
                        name="name"
                        value={payload.name}
                        onChange={(e) => {
                          setPayload((prevV) => {
                            return { ...prevV, name: e.target.value };
                          });
                        }}
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
                        value={payload.email}
                        onChange={(e) => {
                          setPayload((prevV) => {
                            return { ...prevV, email: e.target.value };
                          });
                        }}
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
                        value={payload.password}
                        onChange={(e) => {
                          setPayload((prevV) => {
                            return { ...prevV, password: e.target.value };
                          });
                        }}
                        // onKeyUp={"validation()"}
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
                        value={payload.phoneNumber}
                        onChange={(e) => {
                          setPayload((prevV) => {
                            return { ...prevV, phoneNumber: e.target.value };
                          });
                        }}
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
                            onChange={(e) => {
                              setPayload((prevV) => {
                                return { ...prevV, gender: e.target.value };
                              });
                            }}
                            className="exampleInputGender"
                          />
                          <label className="form-label">Male</label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            name="gender"
                            value="Female"
                            onChange={(e) => {
                              setPayload((prevV) => {
                                return { ...prevV, gender: e.target.value };
                              });
                            }}
                            className="exampleInputGender"
                          />
                          <label className="form-label">Female</label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            name="gender"
                            value="Others"
                            onChange={(e) => {
                              setPayload((prevV) => {
                                return { ...prevV, gender: e.target.value };
                              });
                            }}
                            className="exampleInputGender"
                          />
                          <label className="form-label">Others</label>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      {success ||
                        (error && (
                          <Notify
                            variant={error ? "danger" : "success"}
                            msg={success || error}
                          />
                        ))}
                    </div>

                    <button
                      type="submit"
                      id="regsiterButton"
                      className="btn col-sm-5 m-auto mb-2 border border-dark "
                      disabled={isDisabled}
                    >
                      Register
                    </button>
                    <label className="p-2 d-flex justify-content-center align-items-center">
                      Already have an account?
                      <Link className="px-2 text-decoration-none" to="/login">
                        Sign in
                      </Link>
                    </label>
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
