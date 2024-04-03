import { useEffect } from "react";
import { createContext, useState } from "react";
import { useBlogs } from "../hooks/useBlogs";

const blogContext = createContext(null);

export const BlogContextProvider = ({ children }) => {
  const { PublishedBlogsOnly, data } = useBlogs();
  const [page] = useState(1);
  const [limit] = useState(2);

  // const [data, setData] = useState([]);

  useEffect(() => {
    PublishedBlogsOnly({ page, limit });
  }, [page, limit]);

  return <blogContext.Provider value={data}>{children}</blogContext.Provider>;
};
