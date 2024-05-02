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
      throw er;
    } finally {
      setLoading(false);
    }
  };

  const PublishedBlogsOnly = useCallback(
    async ({ title, author, page, limit, sort }) => {
      try {
        setLoading(true);
        const response = await instance.get(
          `${URLS.PUBLISHED_BLOG_LIST}?title=${title}&author=${author}&page=${page}&limit=${limit}&sort=${sort}`
        );
        setData(response?.data?.message);
        return response?.data;
      } catch (er) {
        setError(er.response ? er.response : "something went wrong");
        throw er;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const getBySlug = useCallback(async (slug) => {
    try {
      setLoading(true);
      const response = await instance.get(`${URLS.GET_BLOG_BY_SLUG}/${slug}`);
      return response?.data.data[0];
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
