import instance from "../utils/api";
import { URLS } from "../constants";

const createBlog = (payload) => {
  return instance.post(URLS.BLOGS, payload);
};

const List = (limit, page) => {
  // console.log(limit, page);
  return instance.get(URLS.BLOGS + `?page=${page}&limit=${limit}`);
};

const changeStatus = (id) => {
  return instance.patch(URLS.BLOGS + `/status/${id}`);
};

const updateBlog = (payload) => {
  return instance.put(URLS.BLOGS + `/updateBlog`, payload);
};

const remove = (id) => {
  return instance.delete(URLS.BLOGS + `/deleteBlog/${id}`);
};

export { createBlog, List, changeStatus, updateBlog, remove };
