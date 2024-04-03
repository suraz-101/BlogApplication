import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import image from "../assets/images/homepage.png";

export const Blog = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-8">
            {/* Blog Image */}
            <img src={image} alt="Blog" className="img-fluid mb-4" />

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
          <div className="col-lg-4">
            {/* Comments Section */}
            <Card>
              <Card.Header>
                <h4>Comments</h4>
              </Card.Header>
              <Card.Body>
                {/* {comments.map((comment, index) => (
                  <div key={index}>
                    <strong>{comment.name}</strong>: {comment.commentText}
                    <hr />
                  </div>
                ))} */}
              </Card.Body>
              <Card.Footer>
                <Form>
                  <Form.Group controlId="name">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                      type="text"
                      // value={name}
                      // onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="commentText">
                    <Form.Label>Comment:</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      // value={commentText}
                      // onChange={(e) => setCommentText(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit Comment
                  </Button>
                </Form>
              </Card.Footer>
            </Card>
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
