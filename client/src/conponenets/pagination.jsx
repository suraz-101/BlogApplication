import React from "react";

export const pagination = () => {
  return (
    <div>
      <nav>
        <ul class="pagination d-flex justify-content-center">
          <li class="page-item">
            <a class="page-link text-dark" href="#">
              <span>&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link text-dark" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link text-dark" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link text-dark" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              <span>&raquo;</span>
              <span class="sr-only text-dark">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
