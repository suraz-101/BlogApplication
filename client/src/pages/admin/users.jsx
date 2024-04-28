import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback, useState } from "react";
import { listUsers } from "../../slices/userSlice";
import { Link } from "react-router-dom";
import { Paginate } from "../../conponenets/Pagination";

export const Users = () => {
  const dispatch = useDispatch();
  const { users, page, limit, total } = useSelector((state) => state.users);
  const [email, setEmail] = useState("");

  const initFetch = useCallback(() => {
    dispatch(listUsers({ limit, page, email }));
  }, [dispatch, limit, page, email]);

  useEffect(() => {
    initFetch();
  }, [initFetch, email]);

  return (
    <div
      className="contentArea col-lg-10 col-sm-8 col-7 bg-light"
      style={{ zIndex: "0" }}
    >
      <div className="container p-4">
        <div className="card shadow">
          <div className="card-body">
            <div className="title border p-2 d-flex flex-shrink-0 justify-content-between align-items-center">
              <h5>Users List</h5>
              <Link to="/admin/addBlog" className="text-decoration-none"></Link>
            </div>
            <div className="search py-2 cobntain">
              <div className="input-group">
                <span className="input-group-text btn button" id="basic-addon1">
                  <i className="fa fa-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Users"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="sub-content border p-3">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">S.N.</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Gender</th>
                  </tr>
                </thead>
                <tbody>
                  {users?.length > 0 ? (
                    users.map((user, index) => {
                      return (
                        <tr className="placeholder-glow" key={user._id}>
                          <th scope="row">{index + 1}</th>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.phoneNumber}</td>
                          <td>{user.gender}</td>
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
                        No Users Found
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
