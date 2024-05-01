import React, { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logoIcon from "../../assets/icons/android-chrome-192x192.png";
import { BASE_URL } from "../../constants";
import { getBlog, updateBlogById } from "../../slices/blogSlice";
import Form from "react-bootstrap/Form";
import moment from "moment";
import { Notify } from "../../conponenets/Notify";

export const BlogEdit = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const id = pathname.split("/")[3];

  const [payload, setPayload] = useState({});
  const [preview, setPreview] = useState("");

  const dispatch = useDispatch();
  const { blog, error } = useSelector((state) => state.blogs);
  const { _id, author, slug, ...rest } = payload;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBlogById({ id: id, blog: rest }));
    navigate("/admin/blogs");
  };

  useEffect(() => {
    dispatch(getBlog(id));
  }, [dispatch, id]);

  useEffect(() => {
    setPayload(blog);
  }, [blog]);

  const convertDate = (originalDate) => {
    var formattedDate = moment(originalDate).format(
      "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
    );
    return formattedDate;
  };

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
      return { ...prevVal, blogImage: file };
    });
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
                        to="/admin/blogs"
                        className="text-decoration-none text-dark"
                      >
                        <i className="fa fa-close"></i>
                      </Link>
                    </div>
                    <div className="title col-12 p-2 text-center">
                      <a href="./admin-blog.html">
                        <img src={logoIcon} alt="" height="60px" width="60px" />
                      </a>
                      <h3>Update Blog</h3>
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
                      id="registerUser"
                      onSubmit={(e) => {
                        handleSubmit(e);
                      }}
                    >
                      <div className="row container">
                        <div className="d-flex justify-content-center">
                          {blog ? (
                            <img
                              src={
                                preview === ""
                                  ? BASE_URL.concat(payload?.blogImage)
                                  : preview
                              }
                              alt=""
                              height="200px"
                              width="200px"
                            />
                          ) : (
                            <></>
                          )}
                        </div>
                        <div className="mb-3 d-flex flex-column">
                          <label for="exampleInputEmail" className="form-label">
                            Featured Image
                          </label>
                          <input
                            className="border p-2"
                            type="file"
                            name="blogImage"
                            id="blogImage"
                            onChange={(e) => {
                              handleFile(e);
                            }}
                            // value={payload?.blogImage.replace("blog", "")}
                          />
                        </div>
                        <div className="mb-3">
                          <label for="exampleInputTitle" className="form-label">
                            Title
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputTitle"
                            name="title"
                            value={payload?.title || ""}
                            onChange={(e) => {
                              setPayload((prevVal) => {
                                return { ...prevVal, title: e.target.value };
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
                            Content
                          </label>
                          <textarea
                            className="form-control"
                            name="content"
                            id="blogContent"
                            cols="82"
                            rows="10"
                            value={payload?.content}
                            onChange={(e) => {
                              setPayload((prevVal) => {
                                return { ...prevVal, content: e.target.value };
                              });
                            }}
                          ></textarea>
                        </div>
                        <div className="mb-3">
                          <label
                            for="exampleInputStatus"
                            className="form-label"
                          >
                            Status
                          </label>
                          <Form.Select
                            value={payload?.status}
                            onChange={(e) => {
                              setPayload((prevVal) => {
                                return { ...prevVal, status: e.target.value };
                              });
                            }}
                          >
                            <option>Select Status</option>
                            {/* <option value={payload?.status}>
                              {payload?.status}
                            </option>
                            {payload?.status === "draft" ? (
                              <option value="published">Published</option>
                            ) : (
                              <option value="darft">Draft</option>
                            )} */}
                            <option value="draft">Draft</option>
                            <option value="published">Published</option>
                          </Form.Select>
                        </div>
                        <div className="mb-3">
                          <label
                            for="exampleInputStatus"
                            className="form-label"
                          >
                            Published Date
                          </label>
                          <input
                            className="form-control"
                            type="date"
                            name=""
                            id=""
                            value={moment(payload.publishedDate).format(
                              "YYYY-MM-DD"
                            )}
                            onChange={(e) => {
                              setPayload((prevVal) => {
                                return {
                                  ...prevVal,
                                  publishedDate: convertDate(e.target.value),
                                };
                              });
                            }}
                          />
                        </div>

                        <button
                          type="submit"
                          id="regsiterButton"
                          className="btn btn-outline-none border border-dark bg-dark text-white col-sm-5 m-auto mb-2"
                        >
                          Update
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
