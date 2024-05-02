import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants";
import { getSingleUser, updateUser } from "../../slices/userSlice";
import { getUser } from "../../utils/login";
import { decodeJwt, getToken } from "../../utils/session";

import { Notify } from "../../conponenets/Notify";

export const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, message } = useSelector((state) => state.users);
  const data = JSON.parse(getUser());
  const email = data.email;
  const [disabled, setDisabled] = useState(true);
  const [preview, setPreview] = useState("");

  const [payload, setPayload] = useState({});
  useEffect(() => {
    setPayload(user);
  }, [user]);

  useEffect(() => {
    dispatch(getSingleUser({ email }));
  }, [dispatch, email]);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
    console.log("file", file.name);
    setPayload((prevVal) => {
      return { ...prevVal, profilePic: file };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, ...rest } = payload;
    dispatch(updateUser(rest));
    console.log(message);
  };

  return (
    <div className="contentArea col-lg-10 col-sm-8 col-7 bg-light">
      <div className="container p-4">
        <div className="card shadow p-4">
          <div className="col-6 border m-auto ">
            {" "}
            <div className="p-4 rounded login-form border bg-white position-relative">
              <div
                className="cross position-absolute top-0 end-0 text-center"
                style={{
                  height: "30px",
                  width: "30px",
                  backgroundColor: " white",
                }}
              >
                <Link to="/admin" className="text-decoration-none text-dark">
                  <i className="fa fa-close"></i>
                </Link>
              </div>
              <div className="title col-12 p-2 text-center d-flex flex-column align-items-center">
                <h3> MY PROFILE</h3>

                <img
                  src={
                    preview === ""
                      ? BASE_URL.concat(payload?.profilePic)
                      : preview
                  }
                  alt=""
                  height="200px"
                  style={{ maxWidth: "200px" }}
                  type="file"
                  className="mt-3 mb-3 shadow rounded"
                />
              </div>
              <form
                action=""
                className="col-12"
                id="registerUser"
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <div className="row container">
                  <div className="mb-3">
                    <input
                      type="file"
                      id="profile-image"
                      className="hidden-input"
                      // placeholder="Change Profile Pic"
                      onChange={(e) => {
                        handleFile(e);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName"
                      name="name"
                      value={payload?.name}
                      onChange={(e) => {
                        setPayload((preV) => {
                          return { ...preV, name: e.target.value };
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
                      name="email"
                      value={payload?.email}
                      required
                      disabled
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="exampleInputPhonenumber"
                      name="phoneNumber"
                      value={payload?.phoneNumber}
                      onChange={(e) => {
                        setPayload((preV) => {
                          return { ...preV, phoneNumber: e.target.value };
                        });
                      }}
                      required
                    />
                  </div>

                  <div className="text-center">
                    {message && <Notify variant="success" msg={message} />}
                  </div>
                  <Link
                    to="/admin/changePasssword"
                    type="submit"
                    id="regsiterButton"
                    className="btn col-sm-5 m-auto mb-2 border border-dark d-flex justify-content-between align-items-center "
                    // disabled={disabled}
                  >
                    <i className="fa fa-key"></i>
                    Change Password
                  </Link>
                  <button
                    type="submit"
                    id="regsiterButton"
                    className="btn btn-primary col-sm-3 m-auto mb-2 border border-dark  d-flex justify-content-between align-items-center"
                    // disabled={disabled}
                  >
                    <i className="fa fa-edit"></i>
                    Update
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
