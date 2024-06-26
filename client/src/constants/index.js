export const BASE_URL = "http://localhost:8000";

const API_VERSION = "api/v1";

export const URLS = {
  LOGIN: API_VERSION + "/users/login",
  REGISTER: API_VERSION + "/users/register",
  GENERATE_OTP: API_VERSION + "/users/otpGeneration",
  VERIFY_OTP: API_VERSION + "/users/verifyOtp",
  PUBLISHED_BLOG_LIST: API_VERSION + "/blogs/getPublishedBlogs",
  GET_SINGLE_BLOG: API_VERSION + "/blogs/singleBlog",
  BLOGS: API_VERSION + "/blogs",
  USERS: API_VERSION + "/users",
  GET_BLOG_BY_SLUG: API_VERSION + "/blogs/getBySlug",
};
