import { useCallback, useEffect, useState } from "react";
import { URLS } from "../constants";
import instance from "../utils/api";

export const useBlogs = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const BlogLists = async ({ page, limit, search }) => {
    try {
      setLoading(true);
      const response = await instance.get(
        `${URLS.PUBLISHED_BLOG_LIST}?page=${page}&limit=${limit}`
      );

      setData(response.data.message);
      return data;
    } catch (er) {
      // setError(er.response? er.response);
      throw er;
    } finally {
      setLoading(false);
    }
  };

  const PublishedBlogsOnly = useCallback(async ({ page, limit }) => {
    try {
      setLoading(true);
      const response = await instance.get(
        `${URLS.PUBLISHED_BLOG_LIST}?page=${page}&limit=${limit}`
      );
      setData(response.data.message);
      return data;
      //   console.log(response.data.message.data);
      //   return response.data.message.data;
    } catch (er) {
      setError(er.response ? er.response : "something went wrong");
      throw er;
    } finally {
      setLoading(false);
    }
  }, []);

  return { BlogLists, error, loading, data, PublishedBlogsOnly };

  //   useEffect(() => {}, []);
};
