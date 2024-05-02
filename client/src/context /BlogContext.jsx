import { useEffect } from "react";
import { createContext, useState } from "react";
import { useBlogs } from "../hooks/useBlogs";

export const blogContext = createContext(null);

export const BlogContextProvider = ({ children }) => {
  const { error, loading, PublishedBlogsOnly, data } = useBlogs();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [sort, setSort] = useState(1);

  useEffect(() => {
    PublishedBlogsOnly({ author, title, page, limit, sort });
  }, [author, title, page, limit, sort]);

  return (
    <blogContext.Provider
      value={{
        data,
        page,
        limit,
        setPage,
        setLimit,
        loading,
        error,
        setAuthor,
        setTitle,
        setSort,
      }}
    >
      {children}
    </blogContext.Provider>
  );
};
