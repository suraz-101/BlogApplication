import { Paginate } from "../conponenets/Pagination";
import "../assets/css/index.css";
import { useContext, useState } from "react";
import { blogContext } from "../context /BlogContext";
import { useEffect } from "react";
import _ from "underscore";
import { BASE_URL } from "../constants";
import { dateFormatter } from "../utils/dateFormatter";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBookmark } from "../slices/bookmarkSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const {
    data,
    setLimit,
    setPage,
    page,
    limit,
    loading,
    error,
    setAuthor,
    setTitle,
  } = useContext(blogContext);

  const [slider, setSlider] = useState({});

  useEffect(() => {
    const currentData = data.data;
    setSlider(_.sample(currentData, 1));
  }, [data]);

  const rescentData = (number = 4) => {
    const currentData = data.data;

    const filterRelatedData = currentData?.filter(
      (data) => data?.slug !== slider[0]?.slug
    );
    return _.sample(filterRelatedData, number);
  };

  const moreArticles = (number = 4) => {
    const currentData = data.data;
    const filterRelatedData = currentData?.filter(
      (data) => data?.slug !== slider[0]?.slug
    );

    return _.sample(filterRelatedData, number);
  };

  return (
    <>
      <div className="container-fluid main-content bg-light">
        {slider?.length > 0 &&
          slider?.map((data) => {
            return (
              <div
                className="cta container row m-auto position-relative"
                key={data?._id}
              >
                <div className="col-lg-6 p-5 d-sm-block cta-content text-center ">
                  <h2>{data.title}</h2>
                  <p className="text-muted">By {data.author_name}</p>
                  <p>{data.content.slice(0, 100).concat("...")}</p>

                  <div className="row py-4">
                    <Link
                      to={`blogsList/${data?.slug}`}
                      className="btn button col-6 col-sm-4 m-auto border border-dark shadow "
                    >
                      Learn More
                    </Link>
                  </div>
                  {/* <img
                    src={BASE_URL.concat(data.blogImage)}
                    height="400px"
                    width="100%"
                    alt=""
                    className="position-absolute"
                  /> */}
                </div>
                <div className="col-lg-6 d-sm-none d-none d-lg-block ">
                  <img
                    src={BASE_URL.concat(data.blogImage)}
                    height="300px"
                    width="100%"
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        <div className="contianer-fluid title p-4">
          <div className="container">
            <ul className="nav list-style-none w-100  p-2 justify-content-between popular">
              <li className="nav-links">
                <a href="" className="nav-link active text-decoration-none">
                  Popular
                </a>
              </li>
              {/* <li>
                <a className="nav-link text-decoration-none" href="">
                  Popular
                </a>
              </li>
              <li>
                <a className="nav-link text-decoration-none" href="">
                  Trending
                </a>
              </li>
              <li>
                <a className="nav-link text-decoration-none" href="">
                  Recent
                </a>
              </li> */}
            </ul>
          </div>
          <div>
            <div
              className="container p-4 row m-auto d-flex flex-nowrap overflow-x-scroll topArticles border"
              id="scrollbar"
            >
              {rescentData()?.length > 0 &&
                rescentData()?.map((data) => {
                  return (
                    <div
                      className="col-12 col-sm-6 col-md-3 mt-2 p-2 "
                      key={data?._id}
                    >
                      <Link
                        to={`/blogsList/${data.slug}`}
                        className="text-decoration-none"
                      >
                        <div className="card col-12">
                          <img
                            src={BASE_URL.concat(data.blogImage)}
                            className="card-img-top"
                            style={{ minHeight: " 200px", maxHeight: "200px" }}
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                            <p className="text-muted">
                              {data.content.slice(0, 80).concat("...")}
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
                                  />
                                </div>
                                <div className="mx-2">
                                  <h6
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {data.author_name}
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
                      </Link>
                    </div>
                  );
                })}
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
          <div className="container">
            <h4 className="container pt-4">More Articles</h4>
          </div>

          <div className="container articles m-auto">
            <div className="row m-auto">
              {moreArticles()?.length > 0 &&
                moreArticles()?.map((data) => {
                  return (
                    <Link
                      to={`blogsList/${data?.slug}`}
                      className="text-decoration-none col-sm-6 col-lg-6 mt-2 p-2"
                    >
                      <div className="card col-sm-12">
                        <div className="row g-0">
                          <div className="col-md-4 border">
                            <img
                              src={BASE_URL.concat(data?.blogImage)}
                              className="img-fluid rounded-start"
                              alt="..."
                              style={{ height: "100%", width: "100%" }}
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <div className="d-flex justify-content-between">
                                <h5 className="card-title">{data?.title}</h5>
                                <button
                                  className="btn btn-none "
                                  onClick={() => {
                                    dispatch(addBookmark(data));
                                  }}
                                >
                                  <i
                                    className="fa fa-bookmark-o"
                                    style={{ fontSize: "15px" }}
                                  ></i>
                                </button>
                              </div>
                              <p className="card-text">
                                {data?.content.slice(0, 90).concat("...")}
                              </p>
                              <p className="card-text">
                                <small className="text-muted">
                                  {dateFormatter(data?.createAt)}
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
          <Paginate
            setPage={setPage}
            setLimit={setLimit}
            limit={limit}
            page={page}
            total={data?.total}
          />
        </div>
      </div>
    </>
  );
};
