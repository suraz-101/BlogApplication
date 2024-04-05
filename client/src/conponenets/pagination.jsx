import React from "react";
import Pagination from "react-bootstrap/Pagination";

export const Paginate = ({ setLimit, setPage, limit, page, total }) => {
  // console.log("limit", limit);
  // console.log("tOTAL", total);
  let active = page;
  const totaNumberOfPages = Math.ceil(total / limit);
  let items = [];

  for (let i = 1; i <= totaNumberOfPages; i++) {
    items.push(
      <Pagination.Item
        key={i}
        active={i === active}
        onClick={() => {
          setPage(i);
        }}
      >
        {i}
      </Pagination.Item>
    );
  }

  if (page === 0 || total === 0) {
    return null;
  }
  return (
    <>
      <div className="d-flex justify-content-around container ">
        <div>
          <select
            name=""
            id=""
            onChange={(e) => {
              setLimit(Number(e.target.value));
            }}
          >
            <option value={5}>Limit</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
        <nav>
          <Pagination>
            <Pagination.First
              disabled={page === 1}
              onClick={() => {
                setPage(1);
              }}
            />
            <Pagination.Prev
              disabled={page === 1}
              onClick={() => {
                page != 1 ? setPage(page - 1) : null;
              }}
            />
            {items.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
            <Pagination.Next
              disabled={page === totaNumberOfPages}
              onClick={() => {
                page != totaNumberOfPages ? setPage(page + 1) : null;
              }}
            />
            <Pagination.Last
              disabled={page === totaNumberOfPages}
              onClick={() => {
                setPage(totaNumberOfPages);
              }}
            />
          </Pagination>
        </nav>
      </div>
    </>
  );
};
