import logoIcon from "../assets/icons/android-chrome-192x192.png";
import "../assets/css/style.css";
import { Link, useNavigate } from "react-router-dom";
import { Notify } from "../conponenets/Notify";
import { useState } from "react";
import instance from "../utils/api";
import { setToken } from "../utils/session";
import { URLS } from "../constants";
// import { Register } from "./Register";
// import { Home } from "./Home";

export const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // const [isDisable, setDisable] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await instance.post(URLS.LOGIN, credentials); // sends reques to http://localhost:8000/api/v1/users/login and store the response in response variable
      setToken(response?.data.message); // This line of code will call the setToken function of utils/session.js file and helps to setItem into the localStorage
      navigate("/admin");
    } catch (error) {
      setError(error);
    } finally {
      setTimeout(() => {
        setError("");
      }, 3000);
      // setCredentials({ email: "", password: "" });
    }
  };

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
                <form
                  action=""
                  className="col-12 "
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <div className="row container">
                    <div className="mb-3">
                      <label className="form-label">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email - example@gmail.com"
                        name="email"
                        onChange={(e) =>
                          setCredentials((prevVlaue) => {
                            return { ...prevVlaue, email: e.target.value };
                          })
                        }
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
                        onChange={(e) =>
                          setCredentials((prevVlaue) => {
                            return { ...prevVlaue, password: e.target.value };
                          })
                        }
                        required
                      />
                    </div>
                    <div className="text-center">
                      {error && (
                        <Notify
                          variant="danger"
                          msg="Username or Password mismatch"
                        />
                      )}
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
