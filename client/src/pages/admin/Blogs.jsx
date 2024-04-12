import { Link } from "react-router-dom";
import { Paginate } from "../../conponenets/Pagination";
import { useDispatch, useSelector } from "react-redux";

import { listBlogs, setLimit } from "../../slices/blogSlice.js";
import { useCallback } from "react";
import { useEffect } from "react";
import { dateFormatter } from "../../utils/dateFormatter";
export const Blogs = () => {
  const dispatch = useDispatch();
  const { blogs, page, limit, total } = useSelector((state) => state.blogs);
  console.log(total);

  const initFetch = useCallback(() => {
    dispatch(listBlogs({ limit, page }));
  }, [dispatch, limit, page]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);
  return (
    <div
      className="contentArea col-lg-10 col-sm-8 col-7 bg-light"
      style={{ zIndex: "0" }}
    >
      <div className="container p-4">
        <div className="card shadow">
          <div className="card-body">
            <div className="title border p-2 d-flex flex-shrink-0 justify-content-between align-items-center">
              <h5>Blog List</h5>
              <Link to="/admin/addBlog" className="text-decoration-none">
                <button
                  type="button"
                  className="btn btn-primary button border  d-flex justify-content-center align-items-center"
                >
                  Add Blog <i className="fa fa-plus mx-2"></i>
                </button>
              </Link>
            </div>
            <div className="search py-2 cobntain">
              <div className="input-group">
                <span className="input-group-text btn button" id="basic-addon1">
                  <i className="fa fa-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by title or author"
                />
              </div>
            </div>
            <div className="sub-content border p-3">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">S.N.</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Status</th>
                    <th scope="col">Published Date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs?.length > 0 ? (
                    blogs.map((blog, index) => {
                      return (
                        <tr className="placeholder-glow" key={blog._id}>
                          <th scope="row">{index + 1}</th>
                          <td>{blog.title}</td>
                          <td>{blog.author}</td>
                          <td>{blog.status}</td>
                          <td>{dateFormatter(blog.createAt)}</td>
                          <td>
                            <button className="btn button">
                              <i className="fa fa-eye"></i>
                            </button>
                          </td>
                          <td>
                            <button
                              className="btn "
                              style={{ backgroundColor: "red" }}
                            >
                              <i className="fa fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td scope="row" colSpan={6} className="text-center ">
                        No Blogs Found
                      </td>
                    </tr>
                  )}

                  {/* <tr className="placeholder-glow">
                    <th scope="row">1</th>
                    <td>
                      <span className="placeholder col-12"></span>
                    </td>
                    <td>
                      <span className="placeholder col-12"></span>
                    </td>
                    <td>
                      <span className="placeholder col-12"></span>
                    </td>
                    <td>
                      <span className="placeholder col-12"></span>
                    </td>
                    <td>
                      <button className="btn button">
                        <i className="fa fa-eye"></i>
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn "
                        style={{ backgroundColor: "red" }}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
            <div className="mt-3">
              <Paginate
                setPage={page}
                setLimit={limit}
                limit={limit}
                page={page}
                total={total}
              />
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
