import "../assets/css/style.css";
import logo from "../assets/icons/android-chrome-192x192.png";

export const VerifyToken = () => {
  return (
    <div>
      <div
        className="container-fluid main d-flex justify-content-center align-items-center bg-light"
        style={{ height: " 100vh" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-10 col-sm-10 col-md-6 col-lg-4 m-auto">
              <div className="p-4 rounded login-form border bg-white">
                <div className="title col-12 p-2 text-center">
                  <a href="./index.html">
                    <img src={logo} alt="" height="60px" width="60px" />
                  </a>
                  <h2>Token Verification</h2>
                </div>
                <form action="" className="col-12" id="verifyToken">
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
                          disabled
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">OTP</label>
                        <input
                          type="text"
                          className="form-control"
                          id="token"
                          placeholder="Please enter the OTP "
                          name="token"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">New Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="newPassword"
                          placeholder="Please enter New Password "
                          name="newPassword"
                          required
                        />
                      </div>
                      <p className="m-auto">
                        <a href="" className="text-decoration-none k">
                          Resend code
                        </a>
                      </p>
                      <button
                        type="submit"
                        className="btn col-sm-7 m-auto my-3 border border-dark"
                      >
                        Change Password
                      </button>
                    </form>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
