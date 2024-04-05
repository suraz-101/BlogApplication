import { useEffect } from "react";
import { createContext, useState } from "react";
import { useBlogs } from "../hooks/useBlogs";

export const blogContext = createContext(null);

export const BlogContextProvider = ({ children }) => {
  const { error, loading, PublishedBlogsOnly, data } = useBlogs();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    PublishedBlogsOnly({ page, limit });
  }, [PublishedBlogsOnly, page, limit]);

  return (
    <blogContext.Provider
      value={{ data, page, limit, setPage, setLimit, loading, error }}
    >
      {children}
    </blogContext.Provider>
  );
};
