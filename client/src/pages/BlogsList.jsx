import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Paginate } from "../conponenets/Pagination";
import { blogContext } from "../context /BlogContext";
import { useBlogs } from "../hooks/useBlogs";
import { BASE_URL } from "../constants/index.js";
import { dateFormatter } from "../utils/dateFormatter";
import { useDebounce } from "../hooks/useDebounce";

import { useDispatch } from "react-redux";
import { addBookmark } from "../slices/bookmarkSlice";

export const BlogsList = () => {
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
  console.log("data", data);

  // const { data } = PublishedBlogsOnly(title, author, page, limit);
  const [search, setSearch] = useState("blog");
  const [value, setValue] = useState("");
  const debounceSearchTerm = useDebounce(value, 500);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setAuthor("");
    setTitle("");
    setValue("");
  };

  const handleSearchTerm = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    search === "blog"
      ? setTitle(debounceSearchTerm)
      : setAuthor(debounceSearchTerm);
  }, [debounceSearchTerm, search, setAuthor, setTitle]);

  if (error) return <>Error Occured</>;
  return (
    <>
      <div className="main-content container-fluid bg-light">
        <div className="heading container d-flex justify-content-between align-items-center row m-auto py-2">
          <div className="col-4">
            <div className="col-lg-12">
              <div className="input-group">
                <div className="input-group-text">
                  <select
                    name="search btn btn-outline-none"
                    id=""
                    value={search}
                    onChange={(e) => {
                      handleSearch(e);
                    }}
                  >
                    <option value="blog">Blogs</option>
                    <option value="author">Author</option>
                  </select>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Blogs"
                  value={value}
                  onChange={(e) => {
                    handleSearchTerm(e);
                  }}
                />
                <div className="input-group-text">
                  <i className="fa fa-search"></i>
                </div>
              </div>
            </div>
          </div>
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

            {data?.data?.length > 0 ? (
              data?.data?.map((data) => {
                console.log(data);
                return (
                  <div
                    className="col-12 col-sm-6 col-md-3 mt-2 p-2"
                    key={data.slug}
                  >
                    <Link
                      to={`/blogsList/${data.slug}`}
                      className="text-decoration-none"
                    >
                      <div className="card col-12  ">
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
                            <div className="col-12 d-flex py-2  justify-content-between  align-items-center  ">
                              <div className=" d-flex align-items-center ">
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
                                <div className="mx-2 ">
                                  <h6
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {data.author_name} (
                                    <span className="text-muted">author</span>)
                                  </h6>
                                  <h6
                                    style={{ fontSize: "12px" }}
                                    className="text-muted"
                                  >
                                    {dateFormatter(data.publishedDate)}
                                  </h6>
                                </div>
                              </div>
                              <div className="bookmarkIcon">
                                <button
                                  className="btn btn-outline-none"
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })
            ) : (
              <div>No Data Found</div>
            )}
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
    </>
  );
};
