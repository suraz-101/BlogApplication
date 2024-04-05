import { useContext, useState, useEffect } from "react";

import { Paginate } from "../conponenets/Pagination";
import { blogContext } from "../context /BlogContext";
import { useBlogs } from "../hooks/useBlogs";
import { BASE_URL } from "../constants/index.js";
import { dateFormatter } from "../utils/dateFormatter";

export const BlogsList = () => {
  const { data, setLimit, setPage, page, limit, loading, error } =
    useContext(blogContext);

  // const { error, loading } = useBlogs();
  // console.log("data and total", data);

  if (error) return <>Error Occured</>;

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
            {loading && (
              <div className="col-12 col-sm-6 col-md-3 mt-2 p-2">
                <a href="./blog-details.html" className="text-decoration-none">
                  <div className="card col-12">
                    <img
                      src="./images//homepage.jpg"
                      className="card-img-top"
                      style={{ minHeight: " 200px", maxHeight: "200px" }}
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
                              width: " 40px",
                              borderRadius: "50%",
                            }}
                          >
                            <img
                              src="./images/homepage.png"
                              className="img-fluid rounded-start"
                              alt="..."
                            />
                          </div>
                          <div className="mx-2">
                            <h6
                              className="placeholder-glow"
                              style={{
                                fontSize: "12px",
                                fontWeight: "bold",
                              }}
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
            )}

            {data?.data?.length > 0 &&
              data?.data?.map((data) => {
                return (
                  <div className="col-12 col-sm-6 col-md-3 mt-2 p-2">
                    <a href="" className="text-decoration-none">
                      <div className="card col-12">
                        <img
                          src={BASE_URL.concat(data.blogImage)}
                          onError={(e) => {
                            e.target.src =
                              "../assets/icons/android-chrome-192x192.png";
                          }}
                          className="card-img-top"
                          style={{ minHeight: " 200px", maxHeight: "200px" }}
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{data.title}</h5>
                          <p className="text-muted">
                            {data.content.slice(0, 30).concat("...")}
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
                                  src={BASE_URL.concat(data.authorProfile)}
                                  className="img-fluid rounded-start"
                                  alt="..."
                                  style={{ width: "100%", height: "100%" }}
                                />
                              </div>
                              <div className="mx-2">
                                <h6
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {data.author}
                                </h6>
                                <h6
                                  style={{ fontSize: "12px" }}
                                  className="text-muted"
                                >
                                  {dateFormatter(data.createAt)}
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
        <Paginate
          setPage={setPage}
          setLimit={setLimit}
          limit={limit}
          page={page}
          total={data.total}
        />
      </div>
    </>
  );
};
