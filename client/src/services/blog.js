import instance from "../utils/api";
import { URLS } from "../constants";

const createBlog = (payload) => {
  return instance.post(URLS.CREATE_BLOGS, payload);
};

export { createBlog };
