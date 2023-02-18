import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:5000/api/",
});
//请求拦截器
service.interceptors.request.use((config) => config);
//响应拦截器
service.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default service;
