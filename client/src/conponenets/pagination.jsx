import React from "react";

export const Pagination = () => {
  return (
    <nav>
      <ul className="pagination d-flex justify-content-center">
        <li className="page-item">
          <a className="page-link text-dark" href="#">
            <span>&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link text-dark" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link text-dark" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link text-dark" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            <span>&raquo;</span>
            <span className="sr-only text-dark">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
