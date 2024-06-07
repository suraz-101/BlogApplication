import React, { useContext, useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import image from "../assets/images/homepage.png";
import { Comments } from "../conponenets/Comment";
import { BASE_URL } from "../constants";
import { blogContext } from "../context /BlogContext";
import { useBlogs } from "../hooks/useBlogs";
import { dateFormatter } from "../utils/dateFormatter";

import _ from "underscore";

export const Blog = () => {
  const { pathname } = useLocation();
  const slug = pathname.split("/")[2];

  const { getBySlug } = useBlogs();
  const [blogData, setBlogData] = useState({});

  const { data } = useContext(blogContext);

  useEffect(() => {
    const fetchData = async () => {
      const datas = await getBySlug(slug);
      setBlogData(datas);
    };
    fetchData();
  }, [slug]);

  const relatedBlogs = (number = 4) => {
    const currentData = data.data;
    const filterRelatedData = currentData?.filter((data) => data.slug !== slug);
    return _.sample(filterRelatedData, number);
  };

  console.log("data,", data);

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-12">
            {/* Blog Image */}
            <div className="blogImage d-flex justify-content-center">
              <img
                src={BASE_URL.concat(blogData.blogImage)}
                alt="Blog"
                className="img-fluid mb-4 border"
                style={{ height: " 500px", width: "900px" }}
              />
            </div>
            <div className="blog-title">
              <h1>{blogData.title}</h1>
            </div>
            <div className="my-4  d-flex justify-content-between align-items-center">
              <span>
                <span>
                  <img
                    src={BASE_URL.concat(blogData.authorProfile)}
                    alt=""
                    className="rounded-circle"
                    style={{ height: " 50px", width: "50px" }}
                  />
                </span>
                <span className="mx-2">{blogData.author_name}</span>
                <span className="text-muted">(author)</span>
              </span>
              <span>
                <i class="fa fa-calendar px-2"></i>
                <span>Published on : </span>
                <span className="text-muted">
                  {dateFormatter(blogData.createdAt)}
                </span>
              </span>
            </div>

            {/* Blog Content */}
            <div className="blog-content">
              <p>{blogData.content}</p>
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
                {relatedBlogs()?.map((data) => {
                  return (
                    <>
                      <div
                        className="col-12 col-sm-6 col-md-3 mt-2 p-2"
                        key={data?.slug}
                      >
                        <Link
                          to={`/blogsList/${data.slug}`}
                          className="text-decoration-none"
                        >
                          <div className="card col-12">
                            <img
                              src={BASE_URL.concat(data?.blogImage)}
                              className="card-img-top"
                              style={{
                                minHeight: " 200px",
                                maxHeight: "200px",
                              }}
                              alt="..."
                            />
                            <div className="card-body">
                              <h5 className="card-title">{data?.title}</h5>
                              <p className="text-muted">
                                {data?.content.slice(0, 40).concat("...")}
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
                                      src={BASE_URL.concat(data?.authorProfile)}
                                      className="img-fluid rounded-start"
                                      alt="..."
                                    />
                                  </div>
                                  <div className="mx-2">
                                    <h6
                                      style={{
                                        fontSize: "12px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      {data?.author_name}
                                    </h6>
                                    <h6
                                      style={{ fontSize: "12px" }}
                                      className="text-muted"
                                    >
                                      {dateFormatter(data?.createAt)}
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
