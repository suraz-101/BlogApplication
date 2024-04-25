import instance from "../utils/api";
import { URLS } from "../constants";

const create = (payload) => {
  console.log("payload", payload);
  return instance.post(URLS.BLOGS, payload, {
    headers: {
      access_token: localStorage.getItem("access_token"),
      "Content-Type": "multipart/form-data",
    },
  });
};

const List = (limit, page) => {
  // console.log(limit, page);[]
  return instance.get(URLS.BLOGS + `?page=${page}&limit=${limit}`, {
    headers: { access_token: localStorage.getItem("access_token") },
  });
};

const changeStatus = (id) => {
  return instance.patch(URLS.BLOGS + `/status/${id}`, {
    headers: { access_token: localStorage.getItem("access_token") },
  });
};

const updateBlog = (payload) => {
  return instance.put(URLS.BLOGS + `/updateBlog`, payload, {
    headers: { access_token: localStorage.getItem("access_token") },
  });
};

const getById = (id) => {
  return instance.get(URLS.BLOGS + `/${id}`, {
    headers: { access_token: localStorage.getItem("access_token") },
  });
};

const remove = (id) => {
  return instance.delete(URLS.BLOGS + `/deleteBlog/${id}`, {
    headers: { access_token: localStorage.getItem("access_token") },
  });
};

export { create, List, changeStatus, updateBlog, remove, getById };
