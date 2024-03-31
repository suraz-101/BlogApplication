export const BASE_URL = "http://localhost:8000";

const API_VERSION = "api/v1";

export const URLS = {
  LOGIN: API_VERSION + "/users/login",
  REGISTER: API_VERSION + "/users/register",
  GENERATE_OTP: API_VERSION + "/users/otpGeneration",
  VERIFY_OTP: API_VERSION + "/users/verifyOtp",
};

// This file is used to store all the information related to the url that we need to navigate
// So, we can reuse all these urls dynamically  wherever we want
