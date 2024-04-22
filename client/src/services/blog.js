import instance from "../utils/api";
import { URLS } from "../constants";

const createBlog = (payload) => {
  return instance.post(URLS.BLOGS, payload, {
    headers: { access_token: localStorage.getItem("access_token") },
  });
};

const List = (limit, page) => {
  // console.log(limit, page);[]
  return instance.get(URLS.BLOGS + `?page=${page}&limit=${limit}`, {
    headers: { access_token: localStorage.getItem("access_token") },
  });
};

const changeStatus = (id) => {
  return instance.patch(URLS.BLOGS + `/status/${id}`);
};

const updateBlog = (payload) => {
  return instance.put(URLS.BLOGS + `/updateBlog`, payload);
};

const getById = (id) => {
  return instance.get(URLS.BLOGS + `/${id}`, {
    headers: { access_token: localStorage.getItem("access_token") },
  });
};

const remove = (id) => {
  return instance.delete(URLS.BLOGS + `/deleteBlog/${id}`);
};

export { createBlog, List, changeStatus, updateBlog, remove, getById };
