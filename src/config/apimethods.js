import axios from "axios";

export const apiHandle = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const Get = (endpoint, id) => {
  return apiHandle.get(`${endpoint}/${id ? id : ""}`);
};

export const Post = (endpoint, body) => {
  return apiHandle.post(`${endpoint}`, body);
};

export const Put = (endpoint, id, body) => {
  return apiHandle.put(`${endpoint}/${id}`, body);
};

export const Delete = (endpoint, id) => {
  return apiHandle.delete(`${endpoint}/${id}`);
};