import { useCallback, useEffect, useState } from "react";
import { URLS } from "../constants";
import instance from "../utils/api";

export const useBlogs = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const BlogLists = async ({ title, author, page, limit }) => {
    try {
      setLoading(true);
      const response = await instance.get(
        `${URLS.PUBLISHED_BLOG_LIST}?title=${title}&author=${author}&page=${page}&limit=${limit}`
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

  const PublishedBlogsOnly = useCallback(
    async ({ title, author, page, limit }) => {
      try {
        setLoading(true);
        const response = await instance.get(
          `${URLS.PUBLISHED_BLOG_LIST}?title=${title}&author=${author}&page=${page}&limit=${limit}`
        );
        console.log(response?.data.message);
        setData(response.data.message);
        return data;
      } catch (er) {
        setError(er.response ? er.response : "something went wrong");
        throw er;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const getBySlug = useCallback(async ({ slug }) => {
    try {
      console.log("slug:", slug);
      setLoading(true);
      const response = await instance.get(`${URLS.GET_SINGLE_BLOG}/${slug}`);
      return response?.data.data[0];
      // setSingleData(response?.data.data[0]);
    } catch (err) {
      console.log("error", err);
    }
  }, []);

  return {
    BlogLists,
    error,
    loading,
    data,
    PublishedBlogsOnly,
    getBySlug,
  };
};
