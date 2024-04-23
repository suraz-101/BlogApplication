import instance from "../utils/api";
import { URLS } from "../constants";

const createUser = (payload) => {
  return instance.post(URLS.BLOGS, payload, {
    headers: { access_token: localStorage.getItem("access_token") },
  });
};

const List = (limit, page) => {
  // console.log(limit, page);[]
  return instance.get(URLS.USERS + `?page=${page}&limit=${limit}`, {
    headers: { access_token: localStorage.getItem("access_token") },
  });
};

const updateUserDetails = (payload) => {
  return instance.put(URLS.USERS + `/updateBlog`, payload, {
    headers: { access_token: localStorage.getItem("access_token") },
  });
};

const getById = (id) => {
  return instance.get(URLS.USERS + `/${id}`, {
    headers: { access_token: localStorage.getItem("access_token") },
  });
};

const remove = (id) => {
  return instance.delete(URLS.USERS + `/deleteBlog/${id}`, {
    headers: { access_token: localStorage.getItem("access_token") },
  });
};

export { createUser, List, updateUserDetails, remove, getById };
