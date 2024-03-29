import logoIcon from "../assets/icons/android-chrome-192x192.png";
import "../assets/css/style.css";
import { Link } from "react-router-dom";
// import { Register } from "./Register";
// import { Home } from "./Home";

export const Login = () => {
  return (
    <>
      <div
        className="container-fluid main d-flex justify-content-center align-items-center bg-light"
        style={{ height: "100vh" }}
      >
        <div className="container ">
          <div className="row">
            <div className="col-xs-10 col-sm-10 col-md-6 col-lg-4 m-auto ">
              <div className="p-4 rounded login-form border position-relative bg-white">
                <div
                  className="cross position-absolute top-0 end-0 text-center "
                  style={{
                    height: "30px",
                    width: "30px",
                    backgroundColor: "white",
                  }}
                >
                  <a
                    href="./index.html"
                    className="text-decoration-none text-dark"
                  >
                    <i className="fa fa-close"></i>
                  </a>
                </div>
                <div className="title col-12 p-2 text-center">
                  <a href="./index.html">
                    <img src={logoIcon} alt="" height="60px" width="60px" />
                  </a>
                  <h2>Login Form</h2>
                </div>
                <form action="" className="col-12 ">
                  <div className="row container">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Email - example@gmail.com"
                          name="email"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                          name="password"
                          required
                        />
                      </div>
                      <p className="m-auto">
                        <Link
                          className="text-decoration-none"
                          to="/forgetPassword"
                        >
                          Forgot Password?
                        </Link>
                      </p>
                      <button
                        type="submit"
                        className="btn border border-dark col-sm-5 m-auto mt-2 "
                      >
                        Login
                      </button>

                      <label className="p-2 d-flex justify-content-center align-items-center">
                        Dont have an account?
                        <Link
                          to="/register"
                          className="px-2 text-decoration-none"
                        >
                          SignUp
                        </Link>
                      </label>
                    </form>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes> */}
    </>
  );
};
