import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../constants";
import { removeBookmark, removeAll } from "../slices/bookmarkSlice";
import { Link } from "react-router-dom";

export const BookmarkPage = () => {
  const dispatch = useDispatch();
  const { bookmarks } = useSelector((state) => state.bookmark);

  const handleDeleteAll = () => {
    dispatch(removeAll());
  };

  return (
    <div className="container mt-4">
      <h4>Bookmarks</h4>
      <div className="row mb-3">
        <div className="col">
          <Button variant="danger" onClick={handleDeleteAll}>
            Delete All Bookmarks
          </Button>
        </div>
      </div>
      <div className="row">
        {bookmarks?.length > 0 ? (
          bookmarks.map((bookmark) => (
            <div key={bookmark._id} className="col-md-4 mb-3 ">
              <Card>
                <Card.Img
                  variant="top"
                  src={BASE_URL.concat(bookmark.blogImage)}
                />
                <Card.Body>
                  <Card.Title>{bookmark.title}</Card.Title>
                  <Card.Text>Author: {bookmark.author}</Card.Text>
                  <div className="d-flex justify-content-between">
                    <Link
                      className="text-decoration-none"
                      to={`/blogsList/${bookmark.slug}`}
                    >
                      <button className="w-100 btn btn-primary btn-outline-none ">
                        View
                      </button>
                    </Link>
                    <button
                      className="w-25 btn btn-danger btn-outline-none "
                      onClick={() => {
                        dispatch(removeBookmark(bookmark._id));
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <div className="p4">
            No BookMark Found. <Link to="/blogsList">Add Bookmark</Link>
          </div>
        )}
      </div>
    </div>
  );
};
