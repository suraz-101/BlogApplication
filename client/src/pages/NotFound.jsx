import { useEffect } from "react";
import "../assets/css/NotFound.css";
import { pageNotFound } from "../assets/js/NotFound";

export const NotFound = () => {
  useEffect(() => {
    pageNotFound();
  }, []);

  return (
    <div>
      <div className="error">
        <div className="container-floud">
          <div className="col-xs-12 ground-color text-center">
            <div className="container-error-404 ">
              <div className="clip ">
                <div className="shadow">
                  <span className="digit thirdDigit"></span>
                </div>
              </div>
              <div className="clip ">
                <div className="shadow">
                  <span className="digit secondDigit"></span>
                </div>
              </div>
              <div className="clip">
                <div className="shadow">
                  <span className="digit firstDigit"></span>
                </div>
              </div>
              <div className="msg">
                OH!<span className="triangle"></span>
              </div>
            </div>
            <h2 className="h1">Sorry! Page not found</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
