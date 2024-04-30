import instance from "../utils/api";
import { URLS } from "../constants";

const createUser = (payload) => {
  return instance.post(URLS.BLOGS, payload, {
    headers: { access_token: localStorage.getItem("access_token") },
  });
};

const List = (limit, page, email = "") => {
  // console.log(limit, page);[]
  return instance.get(
    URLS.USERS + `?page=${page}&limit=${limit}&email=${email}`,
    {
      headers: { access_token: localStorage.getItem("access_token") },
    }
  );
};

const updateUserDetails = (payload) => {
  console.log("services payload", payload);
  return instance.put(URLS.USERS + `/updateProfile`, payload, {
    headers: { access_token: localStorage.getItem("access_token") },
  });
};

const getById = (email) => {
  return instance.get(URLS.USERS + `/get-user?email=${email}`, {
    headers: { access_token: localStorage.getItem("access_token") },
  });
};

const remove = (id) => {
  return instance.delete(URLS.USERS + `/deleteBlog/${id}`, {
    headers: { access_token: localStorage.getItem("access_token") },
  });
};

export { createUser, List, updateUserDetails, remove, getById };
