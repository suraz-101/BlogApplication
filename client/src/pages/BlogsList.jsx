import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Pagination } from "../conponenets/Pagination";
import { useBlogs } from "../hooks/useBlogs";

export const BlogsList = () => {
  // const [page, setPage] = useState(1);
  // const [limit, setLimit] = useState(2);
  // const { PublishedBlogsOnly } = useBlogs();

  // useEffect(() => {
  //   PublishedBlogsOnly({ page, limit });
  // }, []);

  return (
    <>
      <div className="main-content container-fluid bg-light">
        <div className="heading container d-flex justify-content-between align-items-center row m-auto py-2">
          <h4 className="col-lg-2">Blogs</h4>
          <div className="col-lg-2">
            <select className="form-select" aria-label="Default select example">
              <option selected>Sort</option>
              <option value="recent">recent</option>
              <option value="popular">popular</option>
            </select>
          </div>
        </div>
        <div className="blog-list">
          <div className="container p-4 row m-auto d-flex">
            <div className="col-12 col-sm-6 col-md-3 mt-2 p-2">
              <a href="./blog-details.html" className="text-decoration-none">
                <div className="card col-12">
                  <img
                    src="../assets/images/homepage.png"
                    className="card-img-top"
                    style={{ minHeight: "200px", maxHeight: "200px" }}
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                      <span className="placeholder col-12"></span>
                    </h5>
                    <p className="text-muted placeholder-glow">
                      <span className="placeholder col-10"></span>
                      <span className="placeholder col-10"></span>
                      <span className="placeholder col-5"></span>
                    </p>
                    <div className="contianer row">
                      <div className="col-12 d-flex py-2">
                        <div
                          className="border"
                          style={{
                            height: "40px",
                            width: "40px",
                            borderRadius: "50%",
                          }}
                        >
                          <img
                            src="../assets/images/homepage.png"
                            className="img-fluid rounded-start"
                            alt="..."
                          />
                        </div>
                        <div className="mx-2">
                          <h6
                            className="placeholder-glow"
                            style={{ fontSize: "12px", fontWeight: " bold" }}
                          >
                            <span className="placeholder col-12"></span>
                          </h6>
                          <h6
                            style={{ fontSize: "12px" }}
                            className="text-muted"
                          >
                            2h ago
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-md-3 mt-2 p-2">
              <a href="" className="text-decoration-none">
                <div className="card col-12">
                  <img
                    src="../assets/images/profile.jpeg"
                    className="card-img-top"
                    style={{ minHeight: " 200px", maxHeight: "200px" }}
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">This is the title</h5>
                    <p className="text-muted">
                      Some quick example text to build on the card title and
                      make.
                    </p>
                    <div className="contianer row">
                      <div className="col-12 d-flex py-2">
                        <div
                          className="border"
                          style={{
                            height: "40px",
                            width: " 40px",
                            borderRadius: "50%",
                          }}
                        >
                          <img
                            src="../assets/images/profile.jpeg"
                            className="img-fluid rounded-start"
                            alt="..."
                          />
                        </div>
                        <div className="mx-2">
                          <h6 style={{ fontSize: "12px", fontWeight: "bold" }}>
                            Author Name
                          </h6>
                          <h6
                            style={{ fontSize: "12px" }}
                            className="text-muted"
                          >
                            2h ago
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-md-3 mt-2 p-2">
              <a href="" className="text-decoration-none">
                <div className="card col-12">
                  <img
                    src="../assets/images/profile.jpeg"
                    className="card-img-top"
                    style={{ minHeight: " 200px", maxHeight: "200px" }}
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">This is the title</h5>
                    <p className="text-muted">
                      Some quick example text to build on the card title and
                      make .
                    </p>
                    <div className="contianer row">
                      <div className="col-12 d-flex py-2">
                        <div
                          className="border"
                          style={{
                            height: "40px",
                            width: " 40px",
                            borderRadius: "50%",
                          }}
                        >
                          <img
                            src="../assets/images/profile.jpeg"
                            className="img-fluid rounded-start"
                            alt="..."
                          />
                        </div>
                        <div className="mx-2">
                          <h6 style={{ fontSize: "12px", fontWeight: "bold" }}>
                            Author Name
                          </h6>
                          <h6
                            style={{ fontSize: "12px" }}
                            className="text-muted"
                          >
                            2h ago
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Pagination />
      </div>
    </>
  );
};
