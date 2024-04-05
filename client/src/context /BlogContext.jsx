import { useEffect } from "react";
import { createContext, useState } from "react";
import { useBlogs } from "../hooks/useBlogs";

export const blogContext = createContext(null);

export const BlogContextProvider = ({ children }) => {
  const { error, loasding, PublishedBlogsOnly, data } = useBlogs();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  console.log(data);

  // const [data, setData] = useState([]);,

  useEffect(() => {
    PublishedBlogsOnly({ page, limit });
  }, [page, limit]);

  return (
    <blogContext.Provider value={{ data, page, limit, setPage, setLimit }}>
      {children}
    </blogContext.Provider>
  );
};
