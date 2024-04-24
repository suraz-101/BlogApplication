import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/android-chrome-192x192.png";

export const AddBlog = () => {
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
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
                        <img src={logo} alt="" height="60px" width="60px" />
                      </a>
                      <h3>Add Blog</h3>
                    </div>
                    <form action="" className="col-12" id="registerUser">
                      <div className="row container">
                        <form>
                          <div className="d-flex justify-content-center">
                            {image ? (
                              <img
                                src={image}
                                alt=""
                                height="200px"
                                width="200px"
                              />
                            ) : (
                              <></>
                            )}
                          </div>
                          <div className="mb-3 d-flex flex-column">
                            <label
                              for="exampleInputEmail"
                              className="form-label"
                            >
                              Featured Image
                            </label>
                            <input
                              className="border p-2"
                              type="file"
                              name="blogImage"
                              id="blogImage"
                              required
                              onChange={(e) => {
                                handleSubmit(e);
                              }}
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              for="exampleInputName"
                              className="form-label"
                            >
                              Title
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputName"
                              placeholder="This is the title of the blog "
                              name="title"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              for="exampleInputEmail"
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
                              placeholder="Enter the content of the blog"
                            ></textarea>
                          </div>

                          <button
                            type="submit"
                            id="regsiterButton"
                            className="btn btn-outline-none border border-dark bg-dark text-white col-sm-5 m-auto mb-2"
                          >
                            Add Blog
                          </button>
                        </form>
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
