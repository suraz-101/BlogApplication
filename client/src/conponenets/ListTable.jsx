import React from "react";

export const ListTable = ({ headers, data }) => {
  const header = headers.length > 0 ? headers : [];
  return (
    <table className="table">
      <thead>
        <tr>
          {head.map((h) => {
            return <th scope="col">{h}</th>;
          })}
          {/* <th scope="col">S.N.</th>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Status</th>
          <th scope="col">Published Date</th>
          <th scope="col">Action</th> */}
        </tr>
      </thead>
      <tbody>
        <tr className="placeholder-glow">
          <th scope="row">1</th>
          <td>How to be a good developer?</td>
          <td>Suraj Pandey</td>
          <td>Published</td>
          <td>22 march 2024</td>
          <td>
            <button className="btn button">
              <i className="fa fa-eye"></i>
            </button>
          </td>
          <td>
            <button className="btn " style={{ backgroundColor: "red" }}>
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
        <tr className="placeholder-glow">
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
            <button className="btn " style={{ backgroundColor: "red" }}>
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
