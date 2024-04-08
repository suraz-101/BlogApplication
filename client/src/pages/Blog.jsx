import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import image from "../assets/images/homepage.png";
import { Comments } from "../conponenets/Comment";

export const Blog = () => {
  const { pathname } = useLocation();
  const slug = pathname.split("/")[2];
  console.log(slug);
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-12">
            {/* Blog Image */}
            <div className="blogImage d-flex justify-content-center">
              <img
                src={image}
                alt="Blog"
                className="img-fluid mb-4 border"
                style={{ height: " 500px", width: "500px" }}
              />
            </div>
            <div className="blog-title">
              <h1>This is the title of the blog</h1>
            </div>
            <div className="my-4 border d-flex justify-content-between">
              <span>
                <i class="fa fa-user px-2"></i>Author Name
              </span>
              <span>
                <i class="fa fa-calendar px-2"></i>Date
              </span>
            </div>

            {/* Blog Content */}
            <div className="blog-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                auctor justo eu est fringilla, vitae molestie libero pharetra.
                Ut vehicula nulla sit amet nunc rutrum laoreet. Duis sit amet
                tortor sed justo consequat malesuada sed id felis.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <Comments url={window.location.href} id={slug} title={slug} />
          </div>
        </div>

        {/* Related Articles Section */}
        <div className="row mt-4">
          <div className="col">
            <h2>Related Articles</h2>
            <div>
              <div
                className="container p-4 row m-auto d-flex flex-nowrap overflow-x-scroll topArticles"
                id="scrollbar"
              >
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
                          make up the bulk of the card's content.
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
                              <h6
                                style={{ fontSize: "12px", fontWeight: "bold" }}
                              >
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
                          make up the bulk of the card's content.
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
                              <h6
                                style={{ fontSize: "12px", fontWeight: "bold" }}
                              >
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
                          make up the bulk of the card's content.
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
                              <h6
                                style={{ fontSize: "12px", fontWeight: "bold" }}
                              >
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
                          make up the bulk of the card's content.
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
                              <h6
                                style={{ fontSize: "12px", fontWeight: "bold" }}
                              >
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
                          make up the bulk of the card's content.
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
                              <h6
                                style={{ fontSize: "12px", fontWeight: "bold" }}
                              >
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
              <div className="showmore container d-flex justify-content-end">
                <a
                  className="text-decoration-none text-dark"
                  id="showmore"
                  // onClick="removeClass()"
                >
                  Show More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
