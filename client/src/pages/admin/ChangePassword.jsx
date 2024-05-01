import React from "react";
import logoIcon from "../../assets/icons/android-chrome-192x192.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Notify } from "../../conponenets/Notify";
import { getUser } from "../../utils/login";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../slices/userSlice";

export const ChangePassword = () => {
  const dispatch = useDispatch();
  const currentUser = JSON.parse(getUser());

  const { error, message } = useSelector((state) => state.users);

  const [userDetails, setUserDetails] = useState({
    email: `${currentUser.email}`,
    oldPassword: "",
    newPassword: "",
  });

  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const [confirm, setConfirm] = useState({
    input: "",
    error: "",
    success: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changePassword(userDetails));
  };

  return (
    <div
      className="contentArea col-lg-10 col-sm-8 col-7 bg-light"
      style={{ zIndex: "0" }}
    >
      <div className="container p-4">
        <div className="card shadow">
          <div className="card-body">
            <div className="container-fluid col-lg-10 main d-flex justify-content-center align-items-center">
              <div className="container">
                <div className="row">
                  <div className="p-2 rounded login-form border position position-relative">
                    <div
                      className="cross position-absolute top-0 end-0 text-center"
                      style={{
                        height: "30px",
                        width: "30px",
                        backgroundColor: "white",
                      }}
                    >
                      <Link
                        to="/admin/profile"
                        className="text-decoration-none text-dark"
                      >
                        <i className="fa fa-close"></i>
                      </Link>
                    </div>
                    <div className="title col-12 p-2 text-center">
                      <a href="./admin-blog.html">
                        <img src={logoIcon} alt="" height="60px" width="60px" />
                      </a>
                      <h3>Change Password</h3>
                      {/* {sucessNotification && (
                        <Notify
                          variant="success"
                          msg={sucessNotification}
                        ></Notify>
                      )} */}
                    </div>
                    <form
                      action=""
                      className="col-12"
                      id="changePassword"
                      onSubmit={(e) => {
                        handleSubmit(e);
                      }}
                    >
                      <div className="row container">
                        <div className="mb-3">
                          <label for="exampleInputTitle" className="form-label">
                            Old Password
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputOldPassword"
                            name="title"
                            value={userDetails?.oldPassword}
                            onChange={(e) => {
                              setUserDetails((prevV) => {
                                return {
                                  ...prevV,
                                  oldPassword: e.target.value,
                                };
                              });
                            }}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            for="exampleInputContent"
                            className="form-label"
                          >
                            New Password
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputNewPassword"
                            name="title"
                            value={userDetails.newPassword}
                            onChange={(e) => {
                              setUserDetails((preVal) => {
                                return {
                                  ...preVal,
                                  newPassword: e.target.value,
                                };
                              });
                              console.log(e.target.value);
                              if (e.target.value != confirm.input) {
                                setConfirm((prevv) => {
                                  return {
                                    ...prevv,
                                    err: "password does not matched",
                                  };
                                });
                                setConfirm((prevv) => {
                                  return { ...prevv, success: "" };
                                });
                              } else {
                                setConfirm((prevv) => {
                                  return {
                                    ...prevv,
                                    success: "password  matched",
                                  };
                                });
                                setConfirm((prevv) => {
                                  return { ...prevv, err: "" };
                                });
                              }
                            }}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          {confirm.input &&
                            (confirm.err ? (
                              <Notify variant="danger" message={confirm.err} />
                            ) : (
                              <Notify
                                variant="success"
                                message={confirm.success}
                              />
                            ))}
                        </div>
                        <div className="mb-3">
                          <label
                            for="exampleInputContent"
                            className="form-label"
                          >
                            Confirm Password
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputConfirm"
                            name="title"
                            value={confirm.input}
                            onChange={(e) => {
                              setConfirm((prevV) => {
                                return { ...prevV, input: e.target.value };
                              });

                              if (e.target.value != userDetails.newPassword) {
                                setConfirm((prevv) => {
                                  return {
                                    ...prevv,
                                    err: "password does not matched",
                                  };
                                });
                                setConfirm((prevv) => {
                                  return { ...prevv, success: "" };
                                });
                              } else {
                                setConfirm((prevv) => {
                                  return {
                                    ...prevv,
                                    success: "password  matched",
                                  };
                                });
                                setConfirm((prevv) => {
                                  return { ...prevv, err: "" };
                                });
                              }
                            }}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          {(message || error) &&
                            (error ? (
                              <Notify variant="danger" msg={error} />
                            ) : (
                              <Notify variant="success" msg={message} />
                            ))}
                        </div>

                        <button
                          type="submit"
                          id="regsiterButton"
                          className="btn btn-outline-none border border-dark bg-dark text-white col-sm-5 m-auto mb-2"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
