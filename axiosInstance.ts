import axios from "axios";
const baseURL = process.env.NEXT_PUBLIC_API_URL;

const headers = {
  "Content-Type": "application/json",
  accept: "application/json, text/plain, */*",
};

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL,
  headers,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error?.config;
    if (error?.response?.status === 401 && !originalRequest.sent) {
      originalRequest.sent = true;
      const response = await axios.get(`${baseURL}/auth/checklogin`, {
        withCredentials: true,
      });
      if (response.status === 200) {
        return axiosInstance(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);

export const axiosInstanceFile = axios.create({
  baseURL,
  headers: {
    "Content-Type": "multipart/form-data",
    accept: "application/json, text/plain, */*",
  },
});

axiosInstanceFile.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error?.config;
    if (error?.response?.status === 401 && !originalRequest.sent) {
      console.log("yes the response is", error.response.status);
      originalRequest.sent = true;
      const response = await axios.get(`${baseURL}/auth/checklogin`, {
        withCredentials: true,
      });
      if (response.status === 200) {
        return axiosInstanceFile(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);
