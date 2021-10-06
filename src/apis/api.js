import axios from "axios";

const apis = {
  development: "https://cadastro-server.herokuapp.com/",
  production: "https://localhost:4000/",
};

const api = axios.create({
  baseURL: apis[process.env.NODE_ENV],
});

api.interceptors.request.use((config) => {
  const storedUser = localStorage.getItem("loggedInUser");

  const loggedInUser = JSON.parse(storedUser || '""');

  if (loggedInUser.token) {
    config.headers = {
      Authorization: `Bearer ${loggedInUser.token}`,
    };
  }

  return config;
});

export default api;
