import { Pagination } from "../conponenets/Pagination";
import "../assets/css/index.css";

export const Home = () => {
  return (
    <>
      <div className="container-fluid main-content bg-light">
        <div className="cta container row m-auto">
          <div className="col-lg-6 p-5 d-sm-block cta-content text-center">
            <h2>This is the title of the blog</h2>
            <p className="text-muted">By Author Name</p>
            <p>This is content of the blog but the summary only ...</p>

            <div className="row py-4">
              <button className="btn button col-6 col-sm-4 m-auto border border-dark shadow ">
                Learn More
              </button>
            </div>
          </div>
          <div className="col-lg-6 d-sm-none d-none d-lg-block imageBackground"></div>
        </div>
        <div className="contianer-fluid title p-4">
          <div className="container">
            <ul className="nav list-style-none w-100 border p-2 justify-content-between popular">
              <li className="nav-links">
                <a href="" className="nav-link active text-decoration-none">
                  Top
                </a>
              </li>
              <li>
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
              </li>
            </ul>
          </div>
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
          <div className="container">
            <h4 className="container pt-4">More Articles</h4>
          </div>
          <div className="categoryButton container p-4 d-flex flex-{grow|shrink}-0 justify-content-between flex-nowrap overflow-x-scroll">
            <button className="btn button m-auto flex-shrink-0">Sceince</button>
            <button className="btn btn-outline-dark m-auto flex-shrink-0">
              Technology
            </button>
            <button className="btn btn-outline-dark m-auto flex-shrink-0">
              Sceince
            </button>
            <button className="btn btn-outline-dark m-auto flex-shrink-0">
              Sceince
            </button>
            <button className="btn btn-outline-dark m-auto flex-shrink-0">
              Sceince
            </button>
          </div>

          <div className="container articles m-auto">
            <div className="row m-auto">
              <a
                href=""
                className="text-decoration-none col-sm-6 col-lg-6 mt-2 p-2"
              >
                <div className="card col-sm-12">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src="../assets/images/profile.jpeg"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <h5 className="card-title">
                            This is the title of the blog
                          </h5>
                          <i
                            className="fa fa-bookmark-o"
                            style={{ fontSize: "20px" }}
                          ></i>
                        </div>
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="text-decoration-none col-sm-6 col-lg-6 mt-2 p-2"
              >
                <div className="card col-sm-12">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src="../assets/images/profile.jpeg"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <h5 className="card-title">
                            This is the title of the blog
                          </h5>
                          <i
                            className="fa fa-bookmark-o"
                            style={{ fontSize: "20px" }}
                          ></i>
                        </div>
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="text-decoration-none col-sm-6 col-lg-6 mt-2 p-2"
              >
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src="../assets/images/profile.jpeg"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <h5 className="card-title">
                            This is the title of the blog
                          </h5>
                          <i
                            className="fa fa-bookmark-o"
                            style={{ fontSize: "20px" }}
                          ></i>
                        </div>
                        s is the third title of the blog
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href=""
                className="text-decoration-none col-sm-6 col-lg-6 mt-2 p-2"
              >
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src="../assets/images/profile.jpeg"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <h5 className="card-title">
                            This is the title of the blog
                          </h5>
                          <i
                            className="fa fa-bookmark-o"
                            style={{ fontSize: "20px" }}
                          ></i>
                        </div>
                        This is the third title of the blog
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </>
  );
};
