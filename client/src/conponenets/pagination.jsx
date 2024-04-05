import React from "react";

export const Pagination = ({ setLimit, setPage, limit, page, total }) => {
  console.log("limit", limit);
  console.log("tOTAL", total);

  const totaNumberOfPages = Math.ceil(total / limit);
  let items = [];

  for (let i = 1; i <= totaNumberOfPages; i++) {
    items.push(
      <li className="page-item">
        <a className="page-link text-dark" href="#">
          {i}
        </a>
      </li>
    );
  }
  console.log(items);
  return (
    <div className="d-flex justify-content-around container ">
      <div>
        <select
          name=""
          id=""
          onChange={(e) => {
            setLimit(e.target.value);
          }}
        >
          <option value={5}>Limit</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
      <nav>
        <ul className="pagination d-flex justify-content-center">
          <li className="page-item">
            <a className="page-link text-dark" href="#">
              <span>&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          {items.map((item) => {
            return <>{item}</>;
          })}
          <li className="page-item">
            <a className="page-link" href="#">
              <span>&raquo;</span>
              <span className="sr-only text-dark">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
